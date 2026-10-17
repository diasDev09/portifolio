import type { Project } from '../types/project'

export const projects: Project[] = [
    {
        slug: 'servico-ja',
        title: 'SERVIÇO JÁ',
        summary: 'ServiçoJá é uma proposta de aplicativo mobile que conecta clientes a profissionais de serviços gerais, facilitando a contratação de serviços residenciais de maneira prática, acessível e segura.',
        technologies:
            [
                'React Native',
                'TypeScript',
                'Java',
                'Spring Boot',
                'PostgreSQL',
                'Docker',
            ],
        cover: '/images/servico-ja/capa.png',
        featured: true,
        links: [
            { label: 'Visão geral', url: '/projetos/servico-ja' },
            { label: 'GitHub', url: 'https://github.com/juaozinh1/ChamaLa.git' },
            { label: 'Demonstração', url: '' },
        ],
        gallery: [
            '/images/servico-ja/tela-1.webp',
            '/images/servico-ja/tela-2.webp',
        ],
        team: [
            {
                name: 'Caio Dias de Miranda',
                role: 'Back-end',
                contribution: '',
                avatar: '/images/servico-ja/equipe/caio.webp',
                github: 'https://github.com/diasDev09',
            },
            {
                name: 'Fernando Antônio Silva Mota',
                role: 'Banco de Dados',
                contribution: '',
                avatar: '/images/servico-ja/equipe/fernando.webp',
            },
            {
                name: 'João Vitor Henrique Campos',
                role: 'Back-end',
                contribution: '',
                avatar: '/images/servico-ja/equipe/joao.webp',
            },
            {
                name: 'Giovanna Mirele de Lima Rodrigues',
                role: 'Front-end',
                contribution: '',
                avatar: '/images/servico-ja/equipe/giovanna.webp',
            },
            {
                name: 'Joana Daniely Silva',
                role: 'Banco de Dados',
                contribution: '',
                avatar: '/images/servico-ja/equipe/joana.webp',
            },
            {
                name: 'Marcos Vinicius Silva de Oliveira',
                role: 'Front-end',
                contribution: '',
                avatar: '/images/servico-ja/equipe/marcos.webp',
            },
        ],
        process: [
            'Planejamento dos requisitos e prototipação das interfaces.',
            'Configuração do ambiente de desenvolvimento.',
            'Modelagem e implementação do banco de dados.',
            'Desenvolvimento do backend e da API REST.',
            'Implementação do cadastro e da autenticação.',
            'Desenvolvimento dos perfis de clientes e profissionais.',
            'Implementação do processo de verificação profissional.',
            'Integração da geolocalização e busca por proximidade.',
            'Desenvolvimento das solicitações e do acompanhamento de serviços.',
            'Implementação das avaliações.',
            'Desenvolvimento do painel administrativo.',
            'Testes, correções e validação das funcionalidades.',
            'Preparação para implantação e publicação.'
        ],
        results: {
            problem: 'Encontrar profissionais de confiança para realizar serviços residenciais pode ser um processo demorado, especialmente quando não existem referências confiáveis ou informações suficientes para comparar as opções disponíveis.',
            solution: 'O ServiçoJá busca solucionar esse problema por meio de uma plataforma que centraliza a busca por profissionais, facilita o contato entre as partes e oferece recursos para aumentar a transparência e a confiança durante a contratação.',
            learnings: 'A aproximação clientes e profissionais, ampliar a visibilidade dos prestadores de serviços e proporcionar uma experiência de contratação mais confiável.',
            status: 'Em desenvolvimento',
        },
    },
]