import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Modules from './pages/Modules'
import Labs from './pages/Labs'
import Tools from './pages/Tools'
import AdminPanel from './pages/AdminPanel'
import Documentation from './pages/Documentation'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/docs" element={<Documentation />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
