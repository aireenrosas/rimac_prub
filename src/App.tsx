import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Plans from './pages/Plans/Plans'
import { UserProvider } from "./hooks/user";

function App() {
  return (
    <UserProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>    
  )
}

export default App
