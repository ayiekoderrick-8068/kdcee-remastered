// SHARED INTEGRATION FILE — coordinate before editing.
// Shared assign/accept/reassign control used by Home Visits, Assistance
// Requests, and My Assignments screens (admin + volunteer sides).
export default function AssignmentWorkflow({ status, onAssign, onAccept, onReassign }) {
  return (
    <div className="flex items-center gap-2">
      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">{status}</span>
      {onAssign && (
        <button onClick={onAssign} className="text-xs font-medium text-slate-900 underline">
          Assign
        </button>
      )}
      {onAccept && (
        <button onClick={onAccept} className="text-xs font-medium text-emerald-700 underline">
          Accept
        </button>
      )}
      {onReassign && (
        <button onClick={onReassign} className="text-xs font-medium text-amber-700 underline">
          Reassign
        </button>
      )}
    </div>
  )
}
