import { NavLink } from 'react-router-dom'

const links = [
    { to: '/', label: 'Home' },
    { to: '/sobre', label: 'Sobre mim' },
    { to: '/projetos', label: 'Projetos' },
    { to: '/contato', label: 'Contato' },
]

export default function Navbar() {
    return (
        <header className="border-b border-border bg-accent">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                <span className="font-semibold">Seu portfólio</span>
                <ul className="flex gap-6 text-sm">
                    {links.map(({ to, label }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                end={to === '/'}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-white font-medium'
                                        : 'text-muted transition-colors hover:text-white'
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