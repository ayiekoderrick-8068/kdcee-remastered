import ContactForm from '../components/ContactForm'

// Owner: allan (frontend-allan-contact-volunteer)
export default function Contact() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="text-3xl font-bold text-slate-900">Contact</h1>
      <div className="mt-6"><ContactForm /></div>
    </div>
  )
}
