import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination } from "swiper/modules"
import { motion } from "framer-motion"

import "swiper/css"
import "swiper/css/bundle"

const slides = [
  {
    title: "Connecting Local Products to Global Markets",
    desc: "We bridge the gap between premium local commodities and international demand with excellence.",
    image: "/hero-1.jpg",
  },
  {
    title: "Reliable Global Logistics",
    desc: "Ensuring your products reach their destination safely, on time, and in perfect condition.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=2000",
  },
]

const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      <Swiper modules={[Autoplay, EffectFade, Pagination]} effect="fade" autoplay={{ delay: 5000, disableOnInteraction: false }} pagination={{ clickable: true }} className="h-full w-full">
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="absolute inset-0 bg-corporate-dark/70" /> {/* Naikkan opacity overlay dari 60 ke 70 atau 75 */}
              <div className="container-custom h-full flex flex-col justify-center items-start text-white relative z-10">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
                  {/* Tambahkan drop-shadow untuk membuat teks "pop-up" dari background */}
                  <h1 className="text-5xl md:text-7xl text-brand-light font-bold mb-6 leading-tight drop-shadow-lg">{slide.title}</h1>

                  {/* Gunakan text-gray-100 agar lebih putih/terang daripada gray-200 */}
                  <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-lg drop-shadow-md">{slide.desc}</p>

                  <div className="flex gap-4">
                    {/* Pastikan tombol tetap terlihat kontras dengan shadow */}
                    <button className="bg-brand px-8 py-3 rounded-md font-semibold hover:bg-brand-dark transition-all shadow-md">Explore Products</button>
                    <button className="border border-white/80 bg-white/10 backdrop-blur-sm px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-corporate transition-all shadow-md">Request Quotation</button>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Hero
