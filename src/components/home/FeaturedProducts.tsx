import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const products = [
  {
    name: "Premium Arabica Coffee",
    category: "Coffee Beans",
    description: "Premium Arabica coffee beans with exceptional aroma and flavor, suitable for coffee processing, tea blends, and international trade.",
    image: "/products/coffee.png",
  },
  {
    name: "Premium Dried Cloves",
    category: "Spices",
    description: "Carefully selected cloves with intense aroma and natural oil content, suitable for food processing, spice blends, and international trade.",
    image: "/products/cengkeh.png",
  },
  {
    name: "Premium Natural Rubber",
    category: "Agriculture",
    description: "Carefully processed natural rubber with consistent quality, ideal for manufacturing, automotive components, and industrial products.",
    image: "/products/rubber.png",
  },
]

const FeaturedProducts = () => {
  return (
    <section id="products" className="section-padding bg-surface">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-brand font-semibold tracking-wider uppercase mb-2">Our Commodities</h3>
            <h2 className="text-4xl font-bold text-corporate-dark">Featured Export Products</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-brand font-semibold hover:gap-4 transition-all">
            View All Products <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all"
            >
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <span className="text-brand text-sm font-medium bg-brand-light px-3 py-1 rounded-full">{product.category}</span>
                <h4 className="text-xl font-bold mt-4 mb-2 text-corporate">{product.name}</h4>
                <p className="text-gray-500 mb-6 text-sm">{product.description}</p>
                <button className="w-full py-2.5 border border-brand text-brand rounded-lg hover:bg-brand hover:text-white transition-all font-semibold">Request Quotation</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
