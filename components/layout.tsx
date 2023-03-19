import Head from "next/head";
import Footer from "../components/footer"
import Navigation from "./navigation";

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>Dreiseenstafette</title>
        <meta name="robots" content="all" key="setindexing" />
        <link rel="icon" type="image/png" href="/logo/favicon.png" />
      </Head>
      <main className="min-h-screen flex flex-col">
        <div className="flex-1">
          <Navigation>{children}</Navigation>
        </div>
        <Footer></Footer>
      </main>
    </>
  )
}
