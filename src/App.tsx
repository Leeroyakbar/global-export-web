import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"
import Home from "./pages/Home"
import { Phone } from "lucide-react"
import AboutPage from "./pages/AboutPage"
import ProductsPage from "./pages/ProductPage"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/product" element={<ProductsPage />} />
          </Routes>
        </main>
        <Footer />
        {/* Global WhatsApp Button */}
        <a href="https://wa.me/yournumber" className="fixed bottom-6 right-6 bg-whatsapp p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50">
          {/* Icon WhatsApp */}
          <Phone className="w-4 h-4 text-white" />
        </a>
      </div>
    </Router>
  )
}

export default App
