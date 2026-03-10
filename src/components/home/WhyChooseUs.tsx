import { motion } from "framer-motion"
import { ShieldCheck, Truck, BarChart3, Award, Headphones, BadgePercent } from "lucide-react"

const features = [
  { icon: ShieldCheck, title: "Quality Control", desc: "Rigorous inspection processes to ensure only the best products reach you." },
  { icon: Truck, title: "Reliable Logistics", desc: "Seamless shipping management ensuring timely and safe delivery worldwide." },
  { icon: BarChart3, title: "Global Experience", desc: "Years of expertise navigating complex international trade regulations." },
  { icon: Award, title: "Intl Standards", desc: "Full compliance with global safety and quality certification standards." },
  { icon: BadgePercent, title: "Competitive Pricing", desc: "Optimized supply chain to offer value without compromising on quality." },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated team to assist you across different time zones." },
]

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h3 className="text-brand font-semibold tracking-wider uppercase mb-2">Why Choose Us</h3>
          <h2 className="text-4xl font-bold text-corporate-dark">Your Trusted Global Trade Partner</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-brand/30 transition-all hover:shadow-lg group"
            >
              <div className="bg-brand-light w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand transition-colors">
                <item.icon className="w-7 h-7 text-brand group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-corporate mb-3">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
