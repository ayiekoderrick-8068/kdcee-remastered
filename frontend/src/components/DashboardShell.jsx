// Owner: derrick (frontend-derrick-auth-dashboard)
export default function DashboardShell({ children }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-56 border-r border-slate-200 bg-white p-4">
        {/* TODO: admin nav */}
      </aside>
      <div className="flex-1 p-6">{children}</div>
    </div>
  )
}
