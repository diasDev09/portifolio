import { education, experience, profile, skills } from '../data/profile'
import Seo from '../components/Seo'

export default function About() {
    return (
        <div className="space-y-12">
            <Seo title="Sobre mim" description="Conheça a minha trajetória, formação, experiência e tecnologias." />
            <section>
                <h1 className="text-3xl font-bold">Sobre mim</h1>
                <p className="mt-3 max-w-2xl text-muted">{profile.bio}</p>
            </section>

            <section>
                <h2 className="mb-4 text-xl font-semibold">Tecnologias</h2>
                <div className="space-y-3">
                    {skills.map((group) => (
                        <div key={group.title}>
                            <h3 className="text-sm text-muted">{group.title}</h3>
                            <ul className="mt-1 flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <li key={item} className="rounded-full bg-surface-2 px-3 py-1 text-sm">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="mb-4 text-xl font-semibold">Formação</h2>
                <ul className="space-y-3">
                    {education.map((e) => (
                        <li key={e.title} className="rounded-lg border border-border bg-surface p-4">
                            <span className="text-xs text-muted">{e.period}</span>
                            <h3 className="font-medium">{e.title}</h3>
                            <p className="text-sm text-muted">{e.place}</p>
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h2 className="mb-4 text-xl font-semibold">Experiência</h2>
                <ul className="space-y-3">
                    {experience.map((e) => (
                        <li key={e.title} className="rounded-lg border border-border bg-surface p-4">
                            <span className="text-xs text-muted">{e.period}</span>
                            <h3 className="font-medium">{e.title} · {e.place}</h3>
                            <p className="text-sm text-muted">{e.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}