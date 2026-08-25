import { useDonationForm } from '../hooks/useDonationForm'

// Owner: jeremy (frontend-jeremy-donate-crafts)
export default function DonationForm() {
  const { values, setValues } = useDonationForm()
  return (
    <form className="space-y-4">
      {/* TODO: donor name, amount, frequency fields */}
    </form>
  )
}
