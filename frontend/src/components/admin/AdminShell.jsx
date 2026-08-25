import { NavLink, Outlet } from 'react-router-dom'

// SHARED INTEGRATION FILE — coordinate before editing.
// Layout wrapper for every /admin/* route: sidebar nav + top bar + <Outlet />.
const NAV = [
  { to: '/admin', label: 'Dashboard', end: true },
  { to: '/admin/elderly', label: 'Elderly Members' },
  { to: '/admin/opa', label: 'OPA' },
  { to: '/admin/attendance', label: 'Attendance' },
  { to: '/admin/activities', label: 'Activities' },
  { to: '/admin/health', label: 'Health Records' },
  { to: '/admin/medication', label: 'Medication' },
  { to: '/admin/donations', label: 'Donations' },
  { to: '/admin/inventory', label: 'Inventory' },
  { to: '/admin/feeding', label: 'Feeding Program' },
  { to: '/admin/home-visits', label: 'Home Visits' },
  { to: '/admin/assistance', label: 'Assistance Requests' },
  { to: '/admin/volunteers', label: 'Volunteers' },
  { to: '/admin/inbox', label: 'Inbox' },
  { to: '/admin/incidents', label: 'Incidents' },
  { to: '/admin/followups', label: 'Follow-ups' },
  { to: '/admin/blog', label: 'Blog' },
  { to: '/admin/gallery', label: 'Gallery' },
  { to: '/admin/crafts', label: 'Crafts' },
  { to: '/admin/team', label: 'Team' },
  { to: '/admin/reports', label: 'Reports' },
  { to: '/admin/analytics', label: 'Analytics' },
]

export default function AdminShell() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="w-64 shrink-0 border-r border-slate-200 bg-white px-4 py-6">
        <p className="mb-4 px-2 text-lg font-bold text-slate-900">KDCCE Admin</p>
        <nav className="space-y-1">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `block rounded-md px-3 py-2 text-sm font-medium ${
                  isActive ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}
