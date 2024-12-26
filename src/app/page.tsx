
// import FAQPage from "./components/faq"
// import About from "./components/about"
// import ClientSection from "./components/client"
// import FeaturesSection from "./components/feauture"
import DiscountItemPage from "./components/discount"
import FeaturedProducts from "./components/featrueproducts"
import Footer from "./components/footer"
import Header from "./components/header"
import HeroSection from "./components/hero"
import Hero2 from "./components/hero2"
import LatestBlogs from "./components/latestblog"
import LatestProducts from "./components/latestproduct"
import LogoSection from "./components/logos"
import TrendingProduct from "./components/new"
import TopCategories from "./components/top"
import TrendingSection from "./components/trendingsection"

// import LoginPage from "./components/login"
// import LogoSection from "./components/logos"



export default function home (){
    return(
        <>
     
        <Header/>
        <HeroSection/>
       <FeaturedProducts/>
       <LatestProducts/>
       <TrendingProduct/>
       <TrendingSection/>
       <DiscountItemPage/>
       <TopCategories/>
       <Hero2/>
       <LogoSection/>
       <LatestBlogs/>
        {/* <About/> */}
        {/* <FeaturesSection/> */}
        {/* <ClientSection/> */}
        {/* <FAQPage/> */}
     {/* <LoginPage/> */}
 {/* <LogoSection/> */}
    
        <Footer/>
        </>
    )
}
