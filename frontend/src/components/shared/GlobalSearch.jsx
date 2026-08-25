import { useState } from 'react'

// SHARED INTEGRATION FILE — coordinate before editing.
// Search box wired to GET /api/search?q=... (admin/staff only, backend already exists).
export default function GlobalSearch({ onSearch }) {
  const [q, setQ] = useState('')
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSearch?.(q)
      }}
      className="w-full max-w-sm"
    >
      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search elderly members, volunteers, visits..."
        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
      />
    </form>
  )
}
