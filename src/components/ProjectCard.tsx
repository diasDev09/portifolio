import { Link } from 'react-router-dom'
import type { Project } from '../types/project'

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <Link
            to={`/projetos/${project.slug}`}
            className="block overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-zinc-500"
        >
            <div className="aspect-video bg-surface-2">
                <img
                    src={project.cover}
                    alt={`Capa do projeto ${project.title}`}
                    loading="lazy"
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="p-4">
                <h3 className="font-semibold">{project.title}</h3>
                <p className="mt-1 text-sm text-muted">{project.summary}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <li key={tech} className="rounded-full bg-surface-2 px-2.5 py-0.5 text-xs">
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
        </Link>
    )
}