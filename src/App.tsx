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
        <div className="app-wrapper">
          <Header />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/plans" element={<Plans />} />
            </Routes>
          </main>
          <Footer />
        </div>       
      </Router>
    </UserProvider>    
  )
}

export default App
