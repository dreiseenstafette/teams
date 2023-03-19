import Link from 'next/link';
import { Fragment, useCallback, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    ArrowSmallRightIcon,
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { socials } from './footer';
import Banner from './banner';

const logo = "/logo/dreiseenstafette.svg";
const logo_small = logo;
const logo_medium = logo;
const logo_light = "/logo/dreiseenstafette_small_light.svg";

const menuItems = [
    { name: "Kategorien", link: "https://dreiseenstafette.ch/kategorien", target: '_self' },
    { name: "Informationen", link: "https://dreiseenstafette.ch/informationen", target: '_self' },
    { name: "Partner", link: "https://dreiseenstafette.ch/partner", target: '_self' },
    { name: "Kontakt", link: "https://dreiseenstafette.ch/kontakt", target: '_self' },
];

export default function Navigation({ children }: any) {
    // default tailwind breakpoint for md: https://tailwindcss.com/docs/screens
    const isSmallScreen = useMediaQuery(768)
    const isMediumScreen = useMediaQuery(1280)

    return (
        <>
            <Banner />
            <div className="z-10">
                <Popover className="relative">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6">
                        <div className="flex items-center justify-between py-8 md:py-16 px-6 align-baseline md:space-x-10">
                            <div className="flex justify-start lg:w-0 lg:flex-1">
                                <Link href="/">
                                    <div>
                                        {isSmallScreen ? (
                                            <img className="h-8 w-auto" src={logo_small} alt="Dreiseenstafette Logo" />
                                        ) : isMediumScreen ? (
                                            <img className="h-12 w-auto" src={logo_medium} alt="Dreiseenstafette Logo" />
                                        ) : (
                                            <img className="h-12 w-auto" src={logo} alt="Dreiseenstafette Logo" />
                                        )}
                                    </div>
                                </Link>
                            </div>
                            <div className="-my-2 -mr-2 md:hidden">
                                <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-blue-500">
                                    <span className="sr-only">Open menu</span>
                                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                            <div className="hidden space-x-3 lg:space-x-4 xl:space-x-5 md:flex md:justify-end md:items-center">
                                {menuItems.map(item => (
                                    <a href={item.link} key={item.name} target={item.target} className="text-base text-blue-500 hover:text-blue-600">
                                        {item.name}
                                    </a>
                                ))}
                                <a href="https://onreg.datasport.com/dreiseenstafette-huettwilen-2023" target="_blank" className="button group">
                                    <ArrowSmallRightIcon className="button-icon" />
                                    Anmelden
                                </a>
                            </div>
                        </div>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel focus className="fixed bottom-0 left-0 right-0 gradient z-10 inset-x-0 top-0 transform transition md:hidden">
                            <div className="mx-auto max-w-7xl px-6 h-full pt-8 pb-1 md:py-16">
                                <div className="grid content-between h-full">
                                    <div className="flex items-center justify-between px-6 align-baseline">
                                        <div>
                                            <Link href="/">
                                                <div>
                                                    <img className="h-8 w-auto" src={logo_light} alt="Dreiseenstafette Logo" />
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="">
                                            <Popover.Button className="inline-flex items-center justify-center rounded-md text-white ">
                                                <span className="sr-only">Close menu</span>
                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="mx-auto text-center">
                                        <nav className="grid gap-y-4 md:gap-y-8">
                                            {menuItems.map(item => (
                                                <a href={item.link} key={item.name} className="text-gray-100 hover:text-gray-200 h2-menu">
                                                    {item.name}
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                    <div className="space-y-6 py-6 px-5 text-center">
                                        <a href="https://onreg.datasport.com/dreiseenstafette-huettwilen-2023" target="_blank" className="button-light group">
                                            <ArrowSmallRightIcon className="mr-2 h-5 w-5 group-hover:text-blue-500" />
                                            Anmelden
                                        </a>
                                        <div className="text-center py-6">
                                            <div className="flex justify-center space-x-6 md:order-2">
                                                {socials.map((item) => (
                                                    <Link key={item.name} href={item.href}>
                                                        <a target="_blank" className="text-gray-100 hover:text-gray-200">
                                                            <span className="sr-only">{item.name}</span>
                                                            <item.icon className="h-5 w-5" aria-hidden="true" />
                                                        </a>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>

                </Popover>
            </div>

            <main className="bg-white">
                {children}
            </main>
        </>
    )
}


// https://github.com/vercel/next.js/discussions/14810#discussioncomment-61177
const useMediaQuery = (width: any) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e: any) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addEventListener("change", updateTarget)


        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true);
        }

        return () => media.removeEventListener("change", updateTarget);
    }, []);

    return targetReached;
};


