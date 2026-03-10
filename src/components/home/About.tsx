import { easeOut, motion } from "framer-motion"
import { Target, Globe } from "lucide-react"

// Variabel animasi untuk reusable
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
}

const About = () => {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="container-custom grid lg:grid-cols-2 gap-16 items-center">
        {/* Sisi Kiri: Gambar dengan animasi muncul dari kiri */}
        <motion.div variants={itemVariants} className="relative">
          <img src="/about.jpg" alt="Global Export Quality" className="rounded-2xl shadow-2xl w-full h-[500px] object-cover" />
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5, duration: 0.5 }} className="absolute -bottom-10 -right-10 bg-brand p-8 rounded-2xl text-white hidden md:block max-w-xs shadow-xl">
            <h4 className="text-xl font-bold mb-2">15+ Years</h4>
            <p className="text-brand-light text-sm">Of excellence in connecting local commodities to global supply chains.</p>
          </motion.div>
        </motion.div>

        {/* Sisi Kanan: Narasi dengan animasi muncul dari kanan */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div>
            <h3 className="text-brand font-semibold tracking-wider uppercase mb-2">About Us</h3>
            <h2 className="text-4xl font-bold text-corporate-dark leading-tight">Bridging Quality Excellence to Global Markets</h2>
          </div>

          <p className="text-gray-600 leading-relaxed">
            We are a premier export house specializing in high-value agricultural commodities. With a deep commitment to quality control and sustainable supply chains, we ensure that every product meets international standards, delivering
            reliability from our farms to your doorstep.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            <div className="flex gap-4">
              <div className="bg-brand-light p-3 rounded-lg h-fit">
                <Target className="text-brand w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-corporate">Our Mission</h4>
                <p className="text-sm text-gray-500">Globalizing local potential.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-brand-light p-3 rounded-lg h-fit">
                <Globe className="text-brand w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-corporate">Our Vision</h4>
                <p className="text-sm text-gray-500">Leading the trade industry.</p>
              </div>
            </div>
          </div>

          <motion.button whileHover={{ x: 10 }} className="text-brand font-semibold flex items-center gap-2 transition-all">
            Learn More About Our History →
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
