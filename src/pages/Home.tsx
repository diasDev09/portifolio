import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { getFeaturedProjects } from '../data/helpers'
import { profile, skills, timeline } from '../data/profile'

export default function Home() {
    const featured = getFeaturedProjects()

    return (
        <div className="space-y-16">
            <section>
                <p className="text-sm text-muted">{profile.role}</p>
                <h1 className="mt-1 text-4xl font-bold">Olá, eu sou {profile.name}</h1>
                <p className="mt-3 max-w-xl text-muted">{profile.tagline}</p>
                <div className="mt-6 flex gap-3">
                    <Link to="/projetos" className="rounded-md bg-accent px-4 py-2 text-sm font-medium hover:brightness-125">
                        Ver projetos
                    </Link>
                    <Link to="/contato" className="rounded-md border border-border px-4 py-2 text-sm hover:border-zinc-500">
                        Entrar em contato
                    </Link>
                </div>
            </section>

            <section>
                <h2 className="mb-4 text-xl font-semibold">Habilidades</h2>
                <div className="grid gap-4 sm:grid-cols-3">
                    {skills.map((group) => (
                        <div key={group.title} className="rounded-lg border border-border bg-surface p-4">
                            <h3 className="font-medium">{group.title}</h3>
                            <p className="mt-2 text-sm text-muted">{group.items.join(' · ')}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="mb-4 text-xl font-semibold">Trajetória</h2>
                <ol className="space-y-4 border-l border-border pl-5">
                    {timeline.map((item) => (
                        <li key={item.period + item.title}>
                            <span className="text-xs text-muted">{item.period}</span>
                            <h3 className="font-medium">{item.title}</h3>
                            <p className="text-sm text-muted">{item.description}</p>
                        </li>
                    ))}
                </ol>
            </section>

            {featured.length > 0 && (
                <section>
                    <h2 className="mb-4 text-xl font-semibold">Destaques</h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {featured.map((p) => (
                            <ProjectCard key={p.slug} project={p} />
                        ))}
                    </div>
                </section>
            )}
        </div>
    )
}