const SITE_NAME = 'CaioLABS'

interface SeoProps {
    title?: string
    description: string
}

// React 19 move <title> e <meta> para o <head> automaticamente.
export default function Seo({ title, description }: SeoProps) {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME

    return (
        <>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
        </>
    )
}