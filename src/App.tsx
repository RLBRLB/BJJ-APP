import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import Curriculum from './pages/Curriculum'
import TechniqueDetail from './pages/TechniqueDetail'
import Concepts from './pages/Concepts'
import Flashcards from './pages/Flashcards'
import TrainingLog from './pages/TrainingLog'
import Progress from './pages/Progress'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/technique/:id" element={<TechniqueDetail />} />
        <Route path="/concepts" element={<Concepts />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/log" element={<TrainingLog />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </Layout>
  )
}
