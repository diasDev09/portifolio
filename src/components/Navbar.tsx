import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
    { to: '/', label: 'Home' },
    { to: '/sobre', label: 'Sobre mim' },
    { to: '/projetos', label: 'Projetos' },
    { to: '/contato', label: 'Contato' },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className="border-b border-border bg-accent">
            <nav aria-label="Principal" className="mx-auto max-w-5xl px-6 py-4">
                <div className="flex items-center justify-between">
                    <span className="font-semibold">DIAS DEVELOPER</span>
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
                                    end={to === '/'}
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'font-medium text-white'
                                            : 'text-muted transition-colors hover:text-white'
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
                                end={to === '/'}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    isActive ? 'font-medium text-white' : 'text-muted hover:text-white'
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