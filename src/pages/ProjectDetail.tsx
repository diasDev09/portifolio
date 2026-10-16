import { useParams } from 'react-router-dom'

export default function ProjectDetail() {
    const { slug } = useParams()
    return <h1 className="text-3xl font-bold">Projeto: {slug}</h1>
}