import VolunteerForm from '../components/VolunteerForm'

// Owner: allan (frontend-allan-contact-volunteer)
export default function BecomeAVolunteer() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="text-3xl font-bold text-slate-900">Become a Volunteer</h1>
      <div className="mt-6"><VolunteerForm /></div>
    </div>
  )
}
