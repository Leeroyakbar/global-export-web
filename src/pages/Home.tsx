import About from "../components/home/About"
import BlogSection from "../components/home/BlogSection"
import ExportProcess from "../components/home/ExportProcess"
import FeaturedProducts from "../components/home/FeaturedProducts"
import Hero from "../components/home/Hero"
import HighlightBanner from "../components/home/HighlightBanner"
import WhyChooseUs from "../components/home/WhyChooseUs"

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProducts />
      <WhyChooseUs />
      <ExportProcess />
      <HighlightBanner />
      <BlogSection />
      {/* ... */}
    </>
  )
}

export default Home
