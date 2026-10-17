export interface ProjectLink {
    label: string // "Visão geral", "GitHub", "Documentação", "Trello", "Demonstração"
    url: string
}

export interface Member {
    name: string
    role: string
    contribution: string
    avatar?: string
    github?: string
}

export interface ProjectResults {
    problem: string
    solution: string
    learnings: string
    status: string
}

export interface Project {
    slug: string // usado na rota: /projetos/:slug
    title: string
    summary: string
    technologies: string[]
    cover: string
    featured?: boolean // aparece nos destaques da Home
    links: ProjectLink[] // a ordem do array é a ordem da subnav
    gallery: string[]
    team: Member[]
    process: string[]
    results: ProjectResults
}