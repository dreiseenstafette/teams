import { ArrowSmallRightIcon } from '@heroicons/react/24/outline';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../components/layout';

const Error500: NextPage = () => {
  const { query } = useRouter();

  return (
    <Layout>

      <Head>
        <title>Dreiseenstafette - 500</title>
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
              Da ist etwas schief gelaufen 👀
            </h1>

            <p className="p">
              Tut uns leid für die Umstände.
              Du kannst es entweder nochmals versuchen und deine Eingaben überprüfen oder - um uns das Debugging einfacher zu machen - via <Link href="/kontakt"><span className="underline underline-offset-4 hover:text-blue-500">Kontaktformular</span></Link> folgenden Fehler senden:
            </p>

            <p className="p bg-gray-100 p-2 rounded-md">
              <code className="">
                error: {query.error}
              </code>
            </p>

            <p className="p bg-gray-100 p-2 rounded-md">
              <code className="">
                data: {query.data}
              </code>
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

export default Error500;
