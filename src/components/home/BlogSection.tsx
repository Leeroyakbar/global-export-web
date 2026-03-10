import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"

const articles = [
  {
    title: "Global Coffee Market Trends in 2026",
    excerpt: "Exploring the shift in consumer preferences for sustainable and single-origin coffee beans.",
    category: "Market Insights",
    date: "Mar 05, 2026",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Understanding Export Compliance",
    excerpt: "A guide to navigating international trade regulations and customs requirements efficiently.",
    category: "Trade Guides",
    date: "Feb 28, 2026",
    image: "/blog.jpg",
  },
  {
    title: "The Future of Sustainable Logistics",
    excerpt: "How green shipping practices are transforming the global agricultural commodity supply chain.",
    category: "Logistics",
    date: "Feb 20, 2026",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600",
  },
]

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h3 className="text-brand font-semibold tracking-wider uppercase mb-2">Latest Insights</h3>
            <h2 className="text-4xl font-bold text-corporate-dark">Stay Updated with Export News</h2>
          </div>
          <button className="flex items-center gap-2 text-brand font-semibold hover:gap-4 transition-all">
            Read All Articles <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand">{article.category}</div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-gray-400 text-sm mb-3 gap-2">
                  <Calendar size={16} />
                  {article.date}
                </div>
                <h4 className="text-xl font-bold text-corporate mb-3 group-hover:text-brand transition-colors">{article.title}</h4>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{article.excerpt}</p>
                <a href="#" className="font-semibold text-corporate flex items-center gap-2 group-hover:text-brand">
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
