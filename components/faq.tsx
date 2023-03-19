const faqs = [
  {
    id: 1,
    question: "Ich kann leider nicht starten. Kann ich das Startgeld zurückfordern?",
    answer:
      "Datasport bietet für solche Fälle eine Versicherung an, die bei der Anmeldung mit einem kleinen Beitrag dazugebucht werden kann. Falls Du das nicht gemacht hast, ist es leider nicht möglich. Wir können Dir aber anbieten, Deinen Startplatz auf das nächste Jahr zu verschieben.",
  },
  {
    id: 2,
    question: "Wo finde ich die Anmeldung für 'Diä schnellste Seebachtaler:inne'?",
    answer:
      "Die Anmeldung läuft nicht über Datasport - Du findest sie deshalb auf der Seite 'Kategorien' wenn Du auf mehr Infos bei der Kategorie klickst.",
  },
  {
    id: 3,
    question: "Hat es Parkplätze?",
    answer:
      "Ja, es gibt jeweils Parkplätze in der Nähe vom Wettkampfzentrum (Badi Hüttwilen). Diese werden jeweils beschildert sein, spätestens ab Einfahrt Badi Hüttwilen. Dennoch - falls Du nicht unbedingt mit dem Auto kommen musst bitten wir Dich der Umwelt zuliebe mit den ÖV anzureisen. Herzlichen Dank!",
  },
  {
    id: 3,
    question: "Gibt es die Strecken als GPX Datei?",
    answer:
      "Selbstverständlich. Du findest sie auf der jeweiligen Seite mit Informationen zur Kategorie.",
  },
  {
    id: 4,
    question: "Wo finde ich die Teambörse?",
    answer:
      "Die Teambörse findest du auf der Kategorien-Seite der Stafette oder ganz unten auf der Website im Footer.",
  },
  {
    id: 5,
    question: "Hat es Duschen / Umkleidekabinen vor Ort?",
    answer:
      "Ja, das Wettkampfzentrum ist gleich bei der Badi Hüttwilen. Dort gibt es Umkleidekabinen sowie WCs getrennt nach Geschlecht. Duschen hat es auch vor Ort.",
  },
  {
    id: 6,
    question: "Wie sieht es mit den ÖV Verbindungen aus?",
    answer:
      "Der Bus fährt jeweils 1x in der Stunde zwischen Diessenhofen und Frauenfeld. Zwischen Hüttwilen und Nussbaumen gibt es die Haltestelle 'Hüttwilen, Stutheien' - das ist der nächste Punkt am Wettkampfzentrum. Danach geht es noch ca. 1km Richtung See hinunter bis du beim Start bist. Idealerweise überprüfst du online den Fahrplan nochmals, bevor du dich auch den Bus verlässt 😉",
  },
]

const lists = [
  { name: 'Startliste 2023', link: 'https://www.datasport.com/live/startlist/?racenr=25893' },
  { name: 'Rangliste 2022', link: 'https://www.datasport.com/live/ranking/?racenr=24893' },
  { name: 'Rangliste 2021', link: 'https://www.datasport.com/live/ranking/?racenr=23893' },
  { name: 'Rangliste 2019', link: 'https://www.datasport.com/live/ranking/?racenr=21893' },
];

import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function FAQ() {
  return (
    <div>
      <h3 className="h3">Oft gestellte Fragen</h3>
      <div className="rounded-2xl bg-white p-2">
        {faqs.map(item => (
          <Disclosure as="div" className="mt-2" key={item.id}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-50 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>{item.question}</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-blue-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-700">
                  {item.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-50 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Wo finde ich Start- und/oder Ranglisten?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-700">
                Du findest sie auf Datasport (Suche - Dreiseenstafette) - sie sind verantwortlich für den Anmeldeprozess und die Auswertung. Unten findest du die letzten Paar Start- und Ranglisten.
                <ul className="list-disc list-inside mt-4 text-gray-700">
                  {lists.map(item => (
                    <li><a className="link" target="_blank" href={item.link}>{item.name}</a></li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
