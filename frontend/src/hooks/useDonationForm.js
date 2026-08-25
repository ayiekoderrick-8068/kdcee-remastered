import { useState } from 'react'

// Owner: jeremy (frontend-jeremy-donate-crafts)
export function useDonationForm() {
  const [values, setValues] = useState({ donorName: '', amount: '' })
  // TODO: validation + submit handling
  return { values, setValues }
}
