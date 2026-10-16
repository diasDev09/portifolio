import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { getAllTechnologies } from '../data/helpers'
import { projects } from '../data/projects'

export default function Projects() {
    const [selected, setSelected] = useState<string | null>(null)
    const technologies = getAllTechnologies()

    const visible = selected
        ? projects.filter((p) => p.technologies.includes(selected))
        : projects

    const chip = (active: boolean) =>
        `rounded-full border px-3 py-1 text-sm transition-colors ${active ? 'border-white bg-white text-black' : 'border-border text-muted hover:border-zinc-500'
        }`

    return (
        <div>
            <h1 className="text-3xl font-bold">Projetos</h1>

            <div className="mt-6 flex flex-wrap gap-2">
                <button onClick={() => setSelected(null)} className={chip(selected === null)}>
                    Todos
                </button>
                {technologies.map((tech) => (
                    <button key={tech} onClick={() => setSelected(tech)} className={chip(selected === tech)}>
                        {tech}
                    </button>
                ))}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {visible.map((p) => (
                    <ProjectCard key={p.slug} project={p} />
                ))}
            </div>

            {visible.length === 0 && <p className="mt-6 text-muted">Nenhum projeto com essa tecnologia.</p>}
        </div>
    )
}