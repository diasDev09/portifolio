import { profile } from '../data/profile'
import Seo from '../components/Seo'

const channels = [
    { label: 'E-mail', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'LinkedIn', value: 'Meu perfil', href: profile.linkedin },
    { label: 'GitHub', value: 'Meu perfil', href: profile.github },
    { label: 'Instagram', value: 'Meu perfil', href: profile.instagram },
]

export default function Contact() {
    return (
        <div>
            <Seo title="Contato" description="Entre em contato comigo por e-mail, LinkedIn ou GitHub." />
            <h1 className="text-3xl font-bold">Contato</h1>
            <p className="mt-3 text-muted">Vamos conversar? Escolha o canal que preferir.</p>

            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
                {channels.map((c) => (
                    <li key={c.label}>
                        <a
                            href={c.href}
                            target={c.href.startsWith('mailto:') ? undefined : '_blank'}
                            rel="noreferrer"
                            className="block rounded-lg border border-border bg-surface p-4 transition-colors hover:border-ink"
                        >
                            <span className="text-sm text-muted">{c.label}</span>
                            <p className="mt-1 break-all font-medium">{c.value}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}