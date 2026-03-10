import { motion } from "framer-motion"

const HighlightBanner = () => {
  return (
    <section className="relative py-30 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/cta.jpg')" }}>
        <div className="absolute inset-0 bg-corporate-dark/70" />
      </div>

      <div className="container-custom relative z-10 flex flex-col items-center text-center text-white">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl text-brand-light font-bold mb-6">Committed to Quality, Delivered Across Continents</h2>
          <p className="text-lg text-gray-300 mb-8">From local farms to global ports, we ensure every commodity meets the highest international standards. Partner with us for a reliable supply chain.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brand px-8 py-3 rounded-md font-semibold hover:bg-brand-dark transition-all">Explore Our Commodities</button>
            <button className="border border-white/30 px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-corporate transition-all">View Our Certifications</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HighlightBanner
