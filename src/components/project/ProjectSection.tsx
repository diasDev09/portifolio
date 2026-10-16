import type { ReactNode } from 'react'

export default function ProjectSection({ title, children }: { title: string; children: ReactNode }) {
    return (
        <section className="rounded-lg border border-border bg-surface p-5">
            <h2 className="mb-4 text-xl font-semibold">{title}</h2>
            {children}
        </section>
    )
}