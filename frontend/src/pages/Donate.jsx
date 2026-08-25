import DonationForm from '../components/DonationForm'

// Owner: jeremy (frontend-jeremy-donate-crafts)
export default function Donate() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="text-3xl font-bold text-slate-900">Donate</h1>
      <div className="mt-6"><DonationForm /></div>
    </div>
  )
}
