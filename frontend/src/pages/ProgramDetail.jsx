import { useParams } from 'react-router-dom'

// Owner: imani (frontend-imani-public-pages)
export default function ProgramDetail() {
  const { id } = useParams()
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-3xl font-bold text-slate-900">Program: {id}</h1>
      <p className="mt-2 text-slate-600">TODO: build the program detail page.</p>
    </div>
  )
}
