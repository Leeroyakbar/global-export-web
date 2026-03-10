import { Globe, Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-corporate-dark text-gray-300 pt-16 pb-8">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Company Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <Globe className="w-6 h-6 text-brand" />
            <span className="text-xl font-bold tracking-tighter">GLOBAL EXPORT</span>
          </div>
          <p className="text-sm leading-relaxed">Leading international trading company specializing in high-quality agricultural products and industrial commodities. Connecting local excellence to global markets.</p>
          <div className="flex gap-4 pt-2">
            <Linkedin className="w-5 h-5 hover:text-brand cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-brand cursor-pointer" />
            <Facebook className="w-5 h-5 hover:text-brand cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/about" className="hover:text-brand">
                About Our Journey
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-brand">
                Export Commodities
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-brand">
                Global Logistics
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-brand">
                Market Insights
              </a>
            </li>
          </ul>
        </div>

        {/* Product Categories */}
        {/* <div>
          <h4 className="text-white font-semibold mb-6">Main Categories</h4>
          <ul className="space-y-3 text-sm">
            <li>Agriculture & Spices</li>
            <li>Coffee Beans & Tea</li>
            <li>Fertilizers & Animal Feed</li>
            <li>Industrial Raw Materials</li>
          </ul>
        </div> */}

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-6">Get In Touch</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand shrink-0" />
              <span>Pidoli Lombang, Mandailing Natal, Indonesia</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand shrink-0" />
              <span>+62 22 7336 6718</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand shrink-0" />
              <span>contact@globalexport.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-custom mt-16 pt-8 border-t border-gray-800 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} Global Export Trading Co. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
