import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div className="grid min-h-screen place-items-center bg-slate-50 px-6 text-center">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">KDCCE Remastered</h1>
        <p className="mt-2 text-slate-600">Frontend scaffold is up and running.</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
