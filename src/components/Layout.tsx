import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'

const currentYear = new Date().getFullYear()

export default function Layout() {
    const { pathname } = useLocation()

    return (
        <div className="flex min-h-screen flex-col">
            <a
                href="#conteudo"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black"
            >
                Pular para o conteúdo
            </a>
            <Navbar />
            <main id="conteudo" tabIndex={-1} className="mx-auto w-full max-w-5xl flex-1 px-6 py-10 outline-none">
                <div key={pathname} className="animate-fade-in">
                    <Outlet />
                </div>
            </main>
            <footer className="border-t border-border py-6 text-center text-sm text-muted">
                © {currentYear} DIAS DEVELOPER. Todos os direitos reservados.
            </footer>
        </div>
    )
}