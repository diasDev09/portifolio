import { Outlet, useLocation } from 'react-router-dom'
import BackToTop from './BackToTop'
import Navbar from './Navbar'
import ScrollToTop from './ScrollToTop'

const currentYear = new Date().getFullYear()

export default function Layout() {
    const { pathname } = useLocation()

    return (
        <div className="flex min-h-screen flex-col">
            <ScrollToTop />
            <a
                href="#conteudo"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
            >
                Pular para o conteúdo
            </a>
            <Navbar />
            <main
                id="conteudo"
                tabIndex={-1}
                className="mx-auto w-full max-w-5xl flex-1 scroll-mt-20 px-6 py-10 outline-none"
            >
                <div key={pathname} className="animate-fade-in">
                    <Outlet />
                </div>
            </main>
            <footer className="border-t border-border py-6 text-center text-sm text-muted">
                © {currentYear} Caio Dias
            </footer>
            <BackToTop />
        </div>
    )
}