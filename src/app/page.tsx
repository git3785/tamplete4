import DiscountItemPage from "./components/discount";
import FeaturedProducts from "./components/featrueproducts";
import HeroSection from "./components/hero";
import Hero2 from "./components/hero2";
import LatestBlogs from "./components/latestblog";
import LatestProducts from "./components/latestproduct";
import LogoSection from "./components/logos";
import TrendingProduct from "./components/trending-product";
import ShopexOffer from "./components/shopexofer";
import TopCategories from "./components/top";
import TrendingSection from "./components/trendingsection";

export default function home (){
    return(
        <>
        <HeroSection/>
        <FeaturedProducts/>
        <LatestProducts/>
      <ShopexOffer/>
        <TrendingProduct/>
        <TrendingSection/>
        <DiscountItemPage/>
        <TopCategories/>
        <Hero2/>
        <LogoSection/>
        <LatestBlogs/>
   
       </>
    )
}
