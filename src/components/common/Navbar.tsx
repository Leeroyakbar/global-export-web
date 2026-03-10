import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Globe } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Globe className={`w-8 h-8 ${isScrolled ? "text-brand" : "text-white"}`} />
          <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? "text-corporate" : "text-white"}`}>
            GLOBAL<span className="text-brand">EXPORT</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.href} className={`text-sm font-medium transition-colors hover:text-brand-light ${isScrolled ? "text-corporate" : "text-white"} ${location.pathname === link.href ? "text-brand font-bold" : ""}`}>
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary py-2 text-sm">
            Request Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X className={isScrolled ? "text-corporate" : "text-white"} /> : <Menu className={isScrolled ? "text-corporate" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 w-full bg-white shadow-xl lg:hidden border-t border-gray-100">
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link key={link.label} to={link.href} onClick={() => setIsMobileOpen(false)} className="text-corporate font-medium text-lg border-b border-gray-50 pb-2">
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
