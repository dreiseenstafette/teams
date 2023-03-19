import { ArrowSmallRightIcon } from '@heroicons/react/24/outline';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';

const Error404: NextPage = () => {
  return (
    <Layout>

      <Head>
        <title>Dreiseenstafette - 404</title>
        <meta name="robots" content="noindex,nofollow" key="setindexing" />
      </Head>

      <div className="content grid grid-cols-1 gap-8 content-center lg:grid-cols-2">
        <div className="grid content-center">
          <div>
            <Image src='/gifs/oh-shit.gif' className="image" width={498} height={270} />
          </div>
        </div>
        <div className="grid content-center">
          <div>
            <h1 className="h3">
              Da ist etwas schief gelaufen
            </h1>

            <p className="p">
              Tut uns leid für die Umstände.
              Falls du das Gefühl hast, dass es ein Fehler auf unserer Seite ist kannst du uns gerne via <Link href="/kontakt"><span className="underline underline-offset-4 hover:text-blue-500">Kontaktformular</span></Link> benachrichtigen. Danke 🙇‍♂️
            </p>

            <Link href="/">
              <div
                className="button">
                Zurück zur Startseite
                <ArrowSmallRightIcon className="ml-2 h-5 w-5 group-hover:text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Error404;
