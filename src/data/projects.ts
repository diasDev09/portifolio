import type { Project } from '../types/project'

export const projects: Project[] = [
    {
        slug: 'projeto-exemplo',
        title: 'Projeto de exemplo',
        summary: 'Descrição curta do que o projeto faz e para quem.',
        technologies: ['React', 'TypeScript', 'Tailwind'],
        cover: '/images/projeto-exemplo/capa.png',
        featured: true,
        links: [
            { label: 'Visão geral', url: '/projetos/projeto-exemplo' },
            { label: 'GitHub', url: 'https://github.com/seu-usuario/projeto-exemplo' },
            { label: 'Demonstração', url: 'https://exemplo.com' },
        ],
        gallery: [
            '/images/projeto-exemplo/tela-1.png',
            '/images/projeto-exemplo/tela-2.png',
        ],
        team: [
            {
                name: 'Seu Nome',
                role: 'Desenvolvedor Front-end',
                contribution: 'Interface e integração com a API.',
            },
        ],
        process: [
            'Levantamento de requisitos',
            'Prototipação no Figma',
            'Desenvolvimento e testes',
        ],
        results: {
            problem: 'Qual problema o projeto resolve.',
            solution: 'Como foi resolvido, e as decisões técnicas.',
            learnings: 'O que você aprendeu no processo.',
        },
    },
    {
        slug: 'segundo-projeto',
        title: 'Segundo projeto',
        summary: 'Outro projeto para testar a listagem e o filtro.',
        technologies: ['Node.js', 'PostgreSQL'],
        cover: '/images/segundo-projeto/capa.png',
        links: [
            { label: 'GitHub', url: 'https://github.com/seu-usuario/segundo-projeto' },
            { label: 'Trello', url: 'https://trello.com/b/exemplo' },
        ],
        gallery: [],
        team: [],
        process: [],
        results: { problem: '', solution: '', learnings: '' },
    },
]