// SHARED INTEGRATION FILE — coordinate before editing.
// Minimal toast/notification banner used across admin + volunteer screens.
export default function Toast({ message, variant = 'info', onClose }) {
  if (!message) return null
  const styles = {
    info: 'bg-slate-900 text-white',
    success: 'bg-emerald-600 text-white',
    error: 'bg-red-600 text-white',
  }
  return (
    <div className={`fixed bottom-4 right-4 z-50 rounded-md px-4 py-3 shadow-lg ${styles[variant] || styles.info}`}>
      <div className="flex items-center gap-3">
        <span className="text-sm">{message}</span>
        {onClose && (
          <button onClick={onClose} className="text-xs opacity-80 hover:opacity-100" aria-label="Dismiss">
            ✕
          </button>
        )}
      </div>
    </div>
  )
}
