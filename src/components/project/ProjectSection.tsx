import type { ReactNode } from 'react'

interface ProjectSectionProps {
    title: string
    children: ReactNode
    className?: string
}

export default function ProjectSection({ title, children, className = '' }: ProjectSectionProps) {
    return (
        <section className={`rounded-lg border border-border bg-surface p-5 ${className}`}>
            <h2 className="mb-4 text-xl font-semibold">{title}</h2>
            {children}
        </section>
    )
}