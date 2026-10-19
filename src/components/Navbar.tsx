import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { scrollToTop } from '../utils/scroll'
import { Wordmark } from './Logo'

const links = [
    { to: '/sobre', label: 'Sobre mim' },
    { to: '/projetos', label: 'Projetos' },
    { to: '/contato', label: 'Contato' },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const { pathname } = useLocation()

    // Fora da Home, o ScrollToTop já leva ao topo ao trocar de página.
    // Na própria Home, a rolagem suave é feita aqui.
    const handleLogoClick = () => {
        setOpen(false)
        if (pathname === '/') scrollToTop()
    }

    return (
        <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur">
            <nav aria-label="Principal" className="mx-auto max-w-5xl px-6 py-3 sm:py-4">
                <div className="flex items-center justify-between gap-4">
                    <Link
                        to="/"
                        onClick={handleLogoClick}
                        aria-label="DiasDev, ir para o início"
                        className="shrink-0 text-ink"
                    >
                        <Wordmark className="h-4 w-auto sm:h-5 md:h-6" />
                    </Link>
                    <button
                        type="button"
                        onClick={() => setOpen((o) => !o)}
                        aria-expanded={open}
                        aria-controls="menu-principal"
                        className="rounded-md px-3 py-1 text-sm md:hidden"
                    >
                        {open ? 'Fechar ✕' : 'Menu ☰'}
                    </button>
                    <ul className="hidden gap-6 text-sm md:flex">
                        {links.map(({ to, label }) => (
                            <li key={to}>
                                <NavLink
                                    to={to}
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'font-medium text-ink'
                                            : 'text-muted transition-colors hover:text-ink'
                                    }
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <ul id="menu-principal" hidden={!open} className="mt-4 space-y-3 text-sm md:hidden">
                    {links.map(({ to, label }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    isActive ? 'font-medium text-ink' : 'text-muted hover:text-ink'
                                }
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}