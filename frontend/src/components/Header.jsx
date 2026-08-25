import { Link } from 'react-router-dom'

// SHARED INTEGRATION FILE — coordinate before editing.
export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-bold text-slate-900">KDCCE</Link>
        <div className="flex gap-6 text-sm font-medium text-slate-600">
          <Link to="/about">About</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/crafts">Crafts</Link>
          <Link to="/donate">Donate</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/become-a-volunteer">Volunteer</Link>
        </div>
      </nav>
    </header>
  )
}
