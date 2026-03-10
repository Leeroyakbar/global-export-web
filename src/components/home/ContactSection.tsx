import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-corporate-dark text-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Sisi Kiri: CTA & Info */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Export Journey?</h2>
              <p className="text-gray-400 text-lg">Our team is ready to assist you with customized quotes, product specifications, and logistics solutions.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand">
                  <Phone />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Call Us</p>
                  <p className="font-bold text-lg">+62 812 3456 7890</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand">
                  <Mail />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email Us</p>
                  <p className="font-bold text-lg">info@globalexport.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand">
                  <MapPin />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Headquarters</p>
                  <p className="font-bold text-lg">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sisi Kanan: Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="bg-white p-8 md:p-10 rounded-3xl text-corporate">
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-brand" />
                <input type="email" placeholder="Email" className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-brand" />
              </div>
              <input type="text" placeholder="Subject" className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-brand" />
              <textarea placeholder="Your Message" rows={4} className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-brand"></textarea>
              <button className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
                Send Request <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
