import { FC } from "react";
import Head from "next/head"
import { Navbar } from "../ui";


type Props = {
  children: React.ReactNode,
  title: React.ReactNode
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Victor Martinez" />
        <meta name="description" content={`Informacion sobre el pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pekedex`} />

        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />
      <main style={{
        padding: '0px 20px'
      }}>
        {children}
      </main>


    </>
  )
}
