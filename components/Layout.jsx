import Head from "next/head";
import NavBar from "./NavBar";

function Layout({children, pageTitle}) {
    return (
        <>
        <Head>
            <title>{pageTitle}</title>
        </Head>
        <header>
            <NavBar/>
        </header>
        <main>
            {children}
        </main>
        </>
    );
}

export default Layout;