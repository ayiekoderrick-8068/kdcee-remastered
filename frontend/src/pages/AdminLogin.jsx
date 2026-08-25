import { useAuth } from '../hooks/useAuth'

// Owner: derrick (frontend-derrick-auth-dashboard)
export default function AdminLogin() {
  const { setUser } = useAuth()
  return (
    <div className="mx-auto max-w-sm px-6 py-20">
      <h1 className="text-3xl font-bold text-slate-900">Sign in</h1>
      <form className="mt-6 space-y-4">
        {/* TODO: email, password fields */}
      </form>
    </div>
  )
}
