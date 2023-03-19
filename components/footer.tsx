import Link from 'next/link';
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline"

export const socials = [
    {
        name: 'TV Hüttwilen',
        href: 'https://tvhuettwilen.ch',
        icon: (props: any) => (
            <svg fill="currentColor" viewBox="0 0 352.21 352.21" {...props}>
                <path fillRule="evenodd" clipRule="evenodd" d="M162,116.86h0l-23.2-92.83-47.8-5.89-.14-.14L11.53,83.76l150.47,33.1Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M0,138.86l32.92,103.19L162.05,116.68h-.37L23.68,100.24,0,138.86Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M176,175.38v.29h0L195.7,.29l-39.28-.29,19.58,175.38Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M352.18,138.86l-32.89,103.19L190.16,116.68h.37l137.94-16.44,23.74,38.57-.03,.05Z" />
                <polygon fillRule="evenodd" clipRule="evenodd" points="176.17 194.43 176.1 194.38 176.04 194.43 176.04 194.44 176.1 194.41 176.17 194.44 176.17 194.43" />
                <path fillRule="evenodd" clipRule="evenodd" d="M190.34,116.85l-14.16,77.53h-.18l-14.16-77.53-93.25,106.06h.06l13.18,34.19,.07-.05,94.21,68.07,94.2-68.12,.07,.05,13.18-34.19h.06l-93.28-106.01Zm-14.34,77.59h0l.07-.05,.06,.05h-.13Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M190.17,116.86h0l23.2-92.83,47.9-5.92,.1-.15,79.33,65.77-150.53,33.13Z" />
            </svg>
        ),
    },
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/DreiSeenStafette',
        icon: (props: any) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/dreiseenstafette/',
        icon: (props: any) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: 'Youtube',
        href: 'https://www.youtube.com/channel/UCfi5DPqo-Z8zKkDl2eU6zow',
        icon: (props: any) => (
            <svg fill="currentColor" viewBox="0 0 461.001 461.001" {...props}>
                <g>
                    <path d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
		c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
		C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
		c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"/>
                </g>
            </svg>
        ),
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/dreiseenstafette/',
        icon: (props: any) => (
            <svg fill="currentColor" viewBox="0 0 310 310" {...props}>
                <g id="XMLID_801_">
                    <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
  C77.16,101.969,74.922,99.73,72.16,99.73z"/>
                    <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
  c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
                    <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
  c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
  c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
  C310,145.43,300.549,94.761,230.454,94.761z"/>
                </g>
            </svg>
        ),
    },
    {
        name: 'GitHub',
        href: 'https://github.com/joergmis/dreiseenstafette',
        icon: (props: any) => (
            <svg fill="currentColor" viewBox="0 0 98 96" {...props}>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
            </svg>
        ),
    },
];

const navigation = {
    athletes: [
        { name: 'Kategorien', href: 'https://dreiseenstafette.ch/kategorien' },
        { name: 'Informationen', href: 'https://dreiseenstafette.ch/informationen' },
        { name: 'Teambörse', href: 'https://dreiseenstafette.ch/teamboerse' },
        { name: 'FAQ', href: 'https://dreiseenstafette.ch/informationen#faq' },
    ],
    about: [
        { name: 'Kontakt', href: 'https://dreiseenstafette.ch/kontakt' },
        { name: 'Partner', href: 'https://dreiseenstafette.ch/partner' },
        { name: 'Fotos', href: 'https://next.tiny-rocket.ch/s/AXgbWcyae2EpXs9' },
        { name: 'Start- und Ranglisten', href: 'https://dreiseenstafette.ch/informationen#faq' },
        { name: 'Helferbereich', href: 'https://dreiseenstafette.ch/helfer' },
        { name: 'TV Hüttwilen', href: 'https://tvhuettwilen.ch' },
    ],
    social: socials,
}

export default function Footer() {
    return (
        <footer className="bg-gray-900" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-5xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex space-x-6 md:order-2">
                        {navigation.social.map((item) => (
                            <Link key={item.name} href={item.href}>
                                <a target="_blank" className="text-gray-600 hover:text-blue-500">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            </Link>
                        ))}
                    </div>
                    <p className="text-base text-gray-600 md:order-1 md:mt-0">
                        &copy; 2021-{new Date().getFullYear()} Dreiseenstafette - ein Event vom <a href="https://tvhuettwilen.ch" className="link" target="_blank">TV Hüttwilen</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

