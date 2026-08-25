import { useParams } from 'react-router-dom'

// Owner: john (frontend-john-gallery-blog)
export default function BlogPost() {
  const { id } = useParams()
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-3xl font-bold text-slate-900">Blog post: {id}</h1>
      <p className="mt-2 text-slate-600">TODO: build the blog post detail page.</p>
    </div>
  )
}
