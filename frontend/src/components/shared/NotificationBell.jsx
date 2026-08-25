// SHARED INTEGRATION FILE — coordinate before editing.
// Unread-notifications bell for the admin/volunteer top bars.
export default function NotificationBell({ count = 0, onClick }) {
  return (
    <button onClick={onClick} className="relative rounded-full p-2 text-slate-500 hover:bg-slate-100" aria-label="Notifications">
      🔔
      {count > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
          {count > 9 ? '9+' : count}
        </span>
      )}
    </button>
  )
}
