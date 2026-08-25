import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import ProgramDetail from './pages/ProgramDetail'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Donate from './pages/Donate'
import Crafts from './pages/Crafts'
import Contact from './pages/Contact'
import BecomeAVolunteer from './pages/BecomeAVolunteer'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'

// SHARED INTEGRATION FILE — coordinate before editing. Adding a route here
// for a page that already exists on your branch is fine; changing someone
// else's route is not.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:id" element={<ProgramDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/crafts" element={<Crafts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/become-a-volunteer" element={<BecomeAVolunteer />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Route>
    </Routes>
  )
}
