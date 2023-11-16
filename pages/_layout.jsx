import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'

const Layout = ({ children, title = 'Default Title' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <header>
                {/* Header content goes here */}
            </header>
            <main>
                <Navbar />
                {children}
                </main>
            <footer>
                {/* Footer content goes here */}
            </footer>
        </>
    )
}

export default Layout