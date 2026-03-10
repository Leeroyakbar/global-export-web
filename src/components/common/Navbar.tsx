import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Globe } from "lucide-react"
import { Link, useLocation, useNavigate } from "react-router-dom"

const navLinks = [
  { label: "Home", href: "home", type: "anchor" },
  { label: "About", href: "about", type: "anchor" },
  { label: "Products", href: "products", type: "anchor" },
  { label: "Gallery", href: "/gallery", type: "internal" },
  { label: "Blog", href: "/blog", type: "internal" },
  { label: "Contact", href: "/contact", type: "internal" },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)

    if (!element) return

    const yOffset = -80
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

    window.scrollTo({ top: y, behavior: "smooth" })
  }

  const handleAnchorClick = (id: string) => {
    setIsMobileOpen(false)

    if (location.pathname !== "/") {
      navigate("/")
      setTimeout(() => {
        scrollToSection(id)
      }, 300)
    } else {
      scrollToSection(id)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      // Jika bukan di halaman home, selalu solid (putih)
      if (location.pathname !== "/") {
        setIsScrolled(true)
      } else {
        setIsScrolled(window.scrollY > 20)
      }
    }

    // Jalankan sekali saat komponen pertama kali dirender
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [location.pathname])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Globe className={`w-8 h-8 ${isScrolled ? "text-brand" : "text-white"}`} />
          <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? "text-corporate" : "text-white"}`}>
            GLOBAL<span className="text-brand">EXPORT</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.type === "anchor" ? (
              <button key={link.label} onClick={() => handleAnchorClick(link.href)} className={`text-sm cursor-pointer font-medium transition-colors hover:text-brand ${isScrolled ? "text-corporate" : "text-white"}`}>
                {link.label}
              </button>
            ) : (
              <Link key={link.label} to={link.href} className={`text-sm font-medium transition-colors hover:text-brand ${isScrolled ? "text-corporate" : "text-white"}`}>
                {link.label}
              </Link>
            ),
          )}

          <Link to="/contact" className="btn-primary py-2 text-sm">
            Request Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X className={isScrolled ? "text-corporate" : "text-white"} /> : <Menu className={isScrolled ? "text-corporate" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl lg:hidden border-t border-gray-100"
          >
            <div className="flex flex-col p-6 gap-5">
              {navLinks.map((link) =>
                link.type === "anchor" ? (
                  <button key={link.label} onClick={() => handleAnchorClick(link.href)} className="text-left text-gray-700 font-medium hover:text-brand transition-colors">
                    {link.label}
                  </button>
                ) : (
                  <Link key={link.label} to={link.href} onClick={() => setIsMobileOpen(false)} className="text-gray-700 font-medium hover:text-brand transition-colors">
                    {link.label}
                  </Link>
                ),
              )}
              <Link to="/contact" className={`px-6 py-2 rounded-lg font-bold transition-all ${isScrolled ? "bg-brand text-white hover:bg-brand-dark" : "bg-white text-brand hover:bg-gray-100"}`}>
                Request Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
