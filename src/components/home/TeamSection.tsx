import { motion } from "framer-motion"
import { Linkedin, Mail } from "lucide-react"

const teamMembers = [
  { name: "Budi Santoso", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
  { name: "Sarah Jenkins", role: "Head of International Sales", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
  { name: "Andi Wijaya", role: "Quality Control Manager", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
]

const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h3 className="text-brand font-semibold tracking-wider uppercase mb-2">Our People</h3>
          <h2 className="text-4xl font-bold text-corporate-dark">Meet Our Experts</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.2 }} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
              <img src={member.image} alt={member.name} className="w-full h-80 object-cover" />
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-corporate">{member.name}</h4>
                <p className="text-brand font-medium text-sm mb-4">{member.role}</p>
                <div className="flex justify-center gap-4">
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-brand cursor-pointer transition-colors" />
                  <Mail className="w-5 h-5 text-gray-400 hover:text-brand cursor-pointer transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
