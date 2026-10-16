import { Link } from 'react-router-dom'
import type { ProjectLink } from '../../types/project'

const style =
    'rounded-full border border-border px-3 py-1 text-sm text-muted transition-colors hover:border-ink hover:text-ink'

export default function ProjectSubnav({ links }: { links: ProjectLink[] }) {
    if (links.length === 0) return null

    return (
        <nav aria-label="Links do projeto" className="flex flex-wrap gap-2">
            {links.map((link) =>
                link.url.startsWith('/') ? (
                    <Link key={link.label} to={link.url} className={style}>
                        {link.label}
                    </Link>
                ) : (
                    <a key={link.label} href={link.url} target="_blank" rel="noreferrer" className={style}>
                        {link.label}
                    </a>
                ),
            )}
        </nav>
    )
}