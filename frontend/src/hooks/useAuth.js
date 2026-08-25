import { useState } from 'react'

// Owner: derrick (frontend-derrick-auth-dashboard)
export function useAuth() {
  const [user, setUser] = useState(null)
  // TODO: wire to POST /api/auth/login via src/lib/api.js, store token
  return { user, setUser }
}
