import { projects } from './projects'

export const getProjectBySlug = (slug: string) =>
    projects.find((p) => p.slug === slug)

export const getFeaturedProjects = () =>
    projects.filter((p) => p.featured)

export const getAllTechnologies = () =>
    [...new Set(projects.flatMap((p) => p.technologies))].sort()