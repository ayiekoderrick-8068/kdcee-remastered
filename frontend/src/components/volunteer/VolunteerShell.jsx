import { NavLink, Outlet } from 'react-router-dom'

// SHARED INTEGRATION FILE — coordinate before editing.
// Layout wrapper for every /volunteer/* route: sidebar nav + top bar + <Outlet />.
const NAV = [
  { to: '/volunteer', label: 'Dashboard', end: true },
  { to: '/volunteer/profile', label: 'My Profile' },
  { to: '/volunteer/assignments', label: 'My Assignments' },
  { to: '/volunteer/assistance-requests', label: 'My Assistance Requests' },
  { to: '/volunteer/elderly-members', label: 'My Elderly Members' },
  { to: '/volunteer/activity', label: 'My Activity' },
  { to: '/volunteer/performance', label: 'My Performance' },
  { to: '/volunteer/messages', label: 'Messages' },
  { to: '/volunteer/report-concern', label: 'Report a Concern' },
  { to: '/volunteer/notifications', label: 'Notifications' },
]

export default function VolunteerShell() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="w-64 shrink-0 border-r border-slate-200 bg-white px-4 py-6">
        <p className="mb-4 px-2 text-lg font-bold text-slate-900">KDCCE Volunteer</p>
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
