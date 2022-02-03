import Head from "next/head";
import NavBar from "./NavBar";

function Layout({children, pageTitle}) {
    return (
        <div className="flex flex-col h-full">
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <header>
                <NavBar/>
            </header>
            <main className="bg-third h-full w-full flex flex-col items-center md:items-start">
                {children}
            </main>
        </div>
    );
}

export default Layout;