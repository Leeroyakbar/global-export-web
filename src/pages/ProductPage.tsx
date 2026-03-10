import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

const allProducts = [
  { id: 1, name: "Premium Arabica Coffee", category: "Coffee", image: "/products/coffee.png", featured: true },
  { id: 2, name: "Premium Dried Cloves", category: "Spices", image: "/products/cengkeh.png", featured: false },
  { id: 3, name: "Premium Natural Rubber", category: "Agriculture", image: "/products/rubber.png", featured: false },
  { id: 4, name: "Cassia Cinnamon", category: "Spices", image: "/products/cinnamon.png", featured: false },
  { id: 5, name: "Virgin Coconut Oil", category: "Agriculture", image: "/products/coconut-oil.png", featured: true },
  { id: 6, name: "Whole Nutmeg", category: "Spices", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600", featured: false },
]

const categories = ["All", "Coffee", "Spices", "Agriculture"]

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProducts = activeCategory === "All" ? allProducts : allProducts.filter((p) => p.category === activeCategory)

  return (
    <div className="pt-32 pb-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-corporate mb-4">Our Commodities</h1>
          <p className="text-gray-600 max-w-xl mx-auto">Connecting Indonesia’s finest resources to the global market with integrity.</p>
        </div>

        {/* Filter */}
        <div className="flex justify-center gap-3 mb-16 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full font-bold transition-all ${activeCategory === cat ? "bg-brand text-white shadow-lg shadow-brand/20" : "bg-white text-gray-600 hover:bg-gray-100"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <motion.div layout className="grid md:grid-cols-3 gap-6 auto-rows-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className={`group relative rounded-4xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 
                  ${product.featured ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"}`}
              >
                <img src={product.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                <div className="absolute inset-0 bg-black/40" />
                {/* Overlay Text */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent p-8 flex flex-col justify-end text-white">
                  <span className="text-brand font-bold text-md uppercase tracking-widest">{product.category}</span>
                  <h4 className="text-2xl font-bold mt-2 text-accent-cream mb-4 drop-shadow-lg">{product.name}</h4>
                  <button className="flex items-center gap-2 text-sm font-semibold hover:gap-4 transition-all">
                    View Specs <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

export default ProductsPage
