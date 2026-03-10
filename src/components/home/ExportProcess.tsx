import { motion } from "framer-motion"
import { Search, ClipboardCheck, Box, Ship, CheckCircle2 } from "lucide-react"

const steps = [
  { icon: Search, title: "Sourcing", desc: "Selecting the best commodities from trusted local farmers." },
  { icon: ClipboardCheck, title: "Inspection", desc: "Rigorous quality check for international standards." },
  { icon: Box, title: "Packaging", desc: "Secure and export-grade packaging for long transit." },
  { icon: Ship, title: "Shipping", desc: "Coordinating with reliable logistics for timely delivery." },
  { icon: CheckCircle2, title: "Delivery", desc: "Safe arrival at your destination port." },
]

const ExportProcess = () => {
  return (
    <section id="process" className="relative section-padding overflow-hidden bg-corporate-dark text-white py-40">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand opacity-10 blur-3xl -mr-20" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand font-semibold tracking-widest uppercase text-lg">Our Workflow</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">How We Handle Your Export</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="group relative bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              {/* Number Badge */}
              <div className="absolute -top-3 -left-3 bg-brand text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">0{idx + 1}</div>

              <div className="mb-6 mt-2">
                <step.icon className="w-10 h-10 text-brand" />
              </div>
              <h4 className="text-lg font-bold mb-3 text-brand-light">{step.title}</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>

              {/* Subtle Arrow Indicator */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-6 top-1/2 text-brand/30">
                  <span className="text-2xl">→</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExportProcess
