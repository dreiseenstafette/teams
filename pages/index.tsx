import { Fragment, useState } from 'react'
import formatDate from 'date-fns/format'
import useSWR, { mutate } from 'swr'
import 'tailwindcss/tailwind.css'
import { listGuestbookEntries } from '../lib/fauna'
import Layout from '../components/layout'
import { ArrowSmallRightIcon, CheckIcon, ChevronUpDownIcon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Listbox, Transition } from '@headlessui/react'
import Infos, { InfoPoint } from '../components/infos'

const fetcher = (url: any) => fetch(url).then((res) => res.json())

const putEntry = (payload: any) =>
    fetch('/api/entries', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => (res.ok ? res.json() : Promise.reject(res)))

const useEntriesFlow = ({ fallback }: any) => {
    const { data: entries } = useSWR('/api/entries', fetcher, {
        fallbackData: fallback.entries,
    })
    const onSubmit = async (payload: any) => {
        await putEntry(payload)
        await mutate('/api/entries')
    }

    return {
        entries,
        onSubmit,
    }
}

const EntryItem = ({ entry }: any) => (
    <div className="relative col-span-1 bg-gray-50 hover:bg-gray-100 py-8 px-8 rounded-lg border-2 border-transparent group">
        <div>
            <span className='inline-flex mr-3 items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-200' >
                {entry.kind}
            </span>

            <span className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-orange-200' >
                {entry.category}
            </span>

        </div>
        <a href={entry.href} className="mt-4 block">
            <p className="text-xl font-semibold text-gray-900">{entry.title}</p>
            <p className="mt-3 text-base text-gray-500">{entry.message}</p>
        </a>
        <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
                <span className="sr-only">{entry.name}</span>
            </div>
            <div className="">
                <p className="text-sm font-medium text-gray-900">
                    Aufgeschaltet von: {entry.name}
                </p>
                <p className="text-sm mt-1 text-gray-500">
                    Kontakt: {entry.contact}
                </p>
                <div className="flex mt-1 space-x-1 text-sm text-gray-500">
                    <time dateTime={entry.createdAt}>{formatDate(new Date(entry.createdAt), "d MMM yyyy 'at' h:mm bb")}</time>
                </div>
            </div>
        </div>
    </div>
)

const EntryForm = ({ onSubmit: onSubmitProp }: any) => {
    const initial = {
        name: '',
        title: '',
        message: '',
        kind: types[0].name,
        category: categories[0].name,
        contact: '',
    }
    const [values, setValues] = useState(initial)
    const [formState, setFormState] = useState('initial')
    const isSubmitting = formState === 'submitting'

    const onSubmit = (ev: any) => {
        ev.preventDefault()

        setFormState('submitting');
        onSubmitProp(values).then(() => {
            setValues(initial);
            setFormState('submitted');
        }).catch((e: any) => {
            console.log(e);
            setFormState('failed');
        })
    }

    const makeOnChange = (fieldName: any) =>
        ({ target: { value } }: any) => setValues({
            ...values,
            [fieldName]: value,
        })

    return (
        <>
            <form className="" onSubmit={onSubmit}>
                <div className="mt-5 md:col-span-2 md:mt-0 width">
                    <div className="grid grid-cols-6 gap-6">

                        <div className="col-span-6 sm:col-span-3">
                            {typeList(values, setValues, makeOnChange)}
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            {categoryList(values, setValues, makeOnChange)}
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name oder Spitzname
                            </label>
                            <input
                                required
                                id="name"
                                name="name"
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Name"
                                value={values.name}
                                onChange={makeOnChange('name')}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                                Kontakt (Mail, Handy, Instagram, ...)
                            </label>
                            <input
                                required
                                id="contact"
                                name="contact"
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Kontaktangabe"
                                value={values.contact}
                                onChange={makeOnChange('contact')}
                            />
                        </div>

                        <div className="col-span-6">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Titel
                            </label>
                            <input
                                required
                                id="title"
                                name="title"
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Kurze Beschreibung, wen oder was du suchst."
                                value={values.title}
                                onChange={makeOnChange('title')}
                            />
                        </div>

                        <div className="col-span-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Beschreibung
                            </label>
                            <textarea
                                required
                                rows={4}
                                name="message"
                                id="message"
                                placeholder="Hier kannst du dich / dein Team vorstellen. Z.B. welche Disziplinen noch fehlen oder für welche du offen wärst."
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                value={values.message}
                                onChange={makeOnChange('message')}
                            />
                        </div>

                    </div>
                </div>
                <div className="flex mt-6">
                    <button className="button-inverse" type="submit" disabled={isSubmitting} >
                        <ArrowSmallRightIcon className="mr-2 h-5 w-5 group-hover:text-white" />
                        Hinzufügen
                    </button>
                </div>
                <div className="mt-6">
                    {({
                        failed: () => <p>Da ist leider etwas schief gelaufen 👀</p>,
                        submitted: () => (
                            <p className="p">Alles klar - danke für einen Eintrag. Du solltest ihn jetzt unten sehen.</p>
                        ),
                    } as any)[formState]?.()}
                </div>
            </form>
        </>
    )
}

const infos: InfoPoint[] = [
    {
        name: 'Kontakt aufnehmen',
        icon: (props: any) => (<PhoneIcon {...props} />),
        description: 'Die Teambörse ist nicht moderiert von der DSS. Das heisst, ihr müsst untereinander selbst Kontakt aufnehmen.',
    },
    {
        name: 'Beitrag löschen',
        icon: (props: any) => (<XMarkIcon {...props} />),
        description: 'Wenn euer Team komplett ist oder du den Beitrag löschen möchtest musst du dich aktuell noch bei uns melden, damit wir das erledigen. Nach dem Wettkampf werden wir alle Beiträge löschen.',
    },
];

const Guestbook = ({ fallback }: any) => {
    const { entries, onSubmit } = useEntriesFlow({ fallback })
    return (
        <Layout>
            <div className="content">
                <h1 className="h1">
                    Teambörse
                </h1>
                <h2 className="h2">
                    Hier kannst du eine Nachricht hinterlassen, wenn du entweder noch einen freien Platz im Team hast oder gerne in einem Team mitmachen möchtest.
                    Die Beiträge werden jeweils nach dem Wettkampf wieder gelöscht.
                </h2>

                <Infos props={infos} />
            </div>

            <div className="content">
                <h2 className="h3 mt-6 md:mt-8">
                    Beitrag erfassen
                </h2>

                <EntryForm onSubmit={onSubmit} />
            </div>

            <div className="content">
                <h2 className="h3">
                    Beiträge
                </h2>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 lg:mt-8">
                    {entries?.map((entry: any) => (
                        <EntryItem key={entry._id} entry={entry} />
                    ))}
                    {(!entries.length || entries.length == 0) && (
                        <p className='italic'>Noch keine Beiträge.</p>
                    )}
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const entries = await listGuestbookEntries()
    return {
        props: {
            fallback: {
                entries,
            },
        },
    }
}

export default Guestbook

const types = [
    { id: 1, name: 'Ich habe einen Platz frei' },
    { id: 2, name: 'Ich suche ein Team' },
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

const typeList = (getter: any, setter: any, triggerer: any) => {
    const [selected, setSelected] = useState(types[0])

    const onChange = (event: any) => {
        const val = getter;
        val.kind = event.name;
        setter(val);
        setSelected(event);
        triggerer('kind');
    }

    return (
        <Listbox value={selected} onChange={onChange}>
            {({ open }) => (
                <>
                    <Listbox.Label className="block text-sm font-medium text-gray-700">Typ</Listbox.Label>
                    <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm">
                            <span className="block truncate">{selected.name}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {types.map((person) => (
                                    <Listbox.Option
                                        key={person.id}
                                        className={({ active }) =>
                                            classNames(
                                                active ? 'text-white bg-blue-600' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-8 pr-4'
                                            )
                                        }
                                        value={person}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span className={classNames(selected ? 'font-semibold' : '', 'block truncate')}>
                                                    {person.name}
                                                </span>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active ? 'text-white' : 'text-blue-600',
                                                            'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                                        )}
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    )
}

const categories = [
    { id: 1, name: 'Stafette Kurz + opt. Reiter (4er / 5er Team)' },
    { id: 2, name: 'Stafette Lang (4er Team)' },
];

const categoryList = (getter: any, setter: any, triggerer: any) => {
    const [selected, setSelected] = useState(categories[0])

    const onChange = (event: any) => {
        const val = getter;
        val.category = event.name;
        setter(val);
        setSelected(event);
        triggerer('category');
    }

    return (
        <Listbox value={selected} onChange={onChange}>
            {({ open }) => (
                <>
                    <Listbox.Label className="block text-sm font-medium text-gray-700">Kategorie</Listbox.Label>
                    <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm">
                            <span className="block truncate">{selected.name}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {categories.map((person) => (
                                    <Listbox.Option
                                        key={person.id}
                                        className={({ active }) =>
                                            classNames(
                                                active ? 'text-white bg-blue-600' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-8 pr-4'
                                            )
                                        }
                                        value={person}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span className={classNames(selected ? 'font-semibold' : '', 'block truncate')}>
                                                    {person.name}
                                                </span>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active ? 'text-white' : 'text-blue-600',
                                                            'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                                        )}
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    )
}
