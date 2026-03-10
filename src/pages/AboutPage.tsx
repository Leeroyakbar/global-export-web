import { easeOut, motion } from "framer-motion"

const AboutPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  }

  return (
    <div className="pt-24 pb-20 bg-gray-50/50">
      {/* Hero Header */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="container-custom py-20 text-center">
        <span className="text-brand font-bold tracking-widest uppercase text-sm">About Us</span>
        <h1 className="text-5xl md:text-6xl font-bold text-corporate mt-4 mb-8">Our Journey to Global Markets</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Connecting local excellence with global demand. We are more than just an exporter; we are your dedicated bridge to premium commodities.</p>
      </motion.section>

      {/* Section History & Values */}
      <section className="container-custom py-10">
        <div className="grid md:grid-cols-2 gap-16 items-center bg-white p-8 md:p-16 rounded-[2rem] shadow-sm border border-gray-100">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-corporate mb-6">A Legacy of Trust</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Starting from a small local trading unit, we evolved by prioritizing quality control and sustainable supply chains. Today, we serve clients in over 20 countries, driven by our passion to deliver Indonesia's finest products to
              the world stage.
            </p>
            <div className="flex gap-6">
              <div>
                <h4 className="text-3xl font-bold text-brand">20+</h4>
                <p className="text-gray-500 text-sm">Countries Served</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-brand">500+</h4>
                <p className="text-gray-500 text-sm">Partnerships</p>
              </div>
            </div>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
            className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </section>

      {/* Our Commitment */}
      <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="container-custom py-20">
        <div className="bg-corporate rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand opacity-10 rounded-full blur-3xl -mr-20 -mt-20" />

          <h2 className="text-4xl font-bold text-center text-brand-light mb-16">Our Core Pillars</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Sustainability", desc: "Eco-friendly farming and ethical trade for long-term environmental balance." },
              { title: "Transparency", desc: "Honest pricing and full traceability from source to your destination port." },
              { title: "Innovation", desc: "Upgrading supply chain technology for faster and more efficient export solutions." },
            ].map((pillar, idx) => (
              // Ubah bagian ini di dalam .map() kamu
              <div key={idx} className="group bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-brand hover:border-brand transition-all duration-500">
                <div className="w-12 h-12 bg-white/10 rounded-xl mb-6 flex items-center justify-center font-bold text-corparate group-hover:text-white group-hover:bg-black/20">0{idx + 1}</div>

                <h4 className="text-xl font-bold mb-4 text-white">
                  {" "}
                  {/* Pastikan judul tetap white */}
                  {pillar.title}
                </h4>

                {/* Gunakan text-gray-200 agar lebih kontras daripada gray-300 */}
                {/* Hapus group-hover:text-white agar warna tetap stabil dan mata tidak lelah */}
                <p className="text-gray-200 leading-relaxed text-sm transition-colors duration-500">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default AboutPage
