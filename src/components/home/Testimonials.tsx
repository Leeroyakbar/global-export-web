import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Dr. Hans Mueller",
    company: "Euro-Foods GmbH, Germany",
    text: "Reliable quality and consistent supply. Our collaboration for organic coffee beans has been nothing but exceptional.",
  },
  {
    name: "Elena Rodriguez",
    company: "Global Spices Corp, Spain",
    text: "The export process was seamless. They handle everything from quality inspection to logistics with professionalism.",
  },
  {
    name: "Kenji Tanaka",
    company: "Tokyo AgriTrade, Japan",
    text: "Outstanding communication and transparency. They truly understand the requirements of the Japanese market.",
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h3 className="text-brand font-semibold tracking-wider uppercase mb-2">Testimonials</h3>
          <h2 className="text-4xl font-bold text-corporate-dark">Trusted by Global Partners</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative group hover:shadow-lg transition-all"
            >
              <Quote className="text-brand/20 w-12 h-12 mb-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand text-brand" />
                ))}
              </div>
              <p className="text-gray-600 mb-8 italic leading-relaxed">"{t.text}"</p>
              <div>
                <h4 className="font-bold text-corporate">{t.name}</h4>
                <p className="text-brand text-sm">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
