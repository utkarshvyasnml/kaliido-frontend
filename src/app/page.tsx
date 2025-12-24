import HeroBanner from "@/components/HeroBanner";
import CategorySection from "@/components/CategorySection";
import KaliidoSpecial from "@/components/KaliidoSpecial";
import BestSellerSection from "@/components/BestSellerSection"
import ShopUnderBudget from "@/components/ShopUnderBudget"
import NewArrivals from "@/components/NewArrivals"
import HeroPromoBanner from "@/components/HeroPromoBanner"
import AntiTarnishSection from "@/components/AntiTarnishSection"
import RingsSection from "@/components/RingsSection"
import HeroPromoBannerTwo from "@/components/HeroPromoBannerTwo"
import BraceletsSection from "@/components/BraceletsSection"
import TrustHighlights from "@/components/TrustHighlights"
import CustomerReviews from "@/components/ReviewsSection"



export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <CategorySection />
      <KaliidoSpecial />
      <BestSellerSection />
      <ShopUnderBudget />
      <NewArrivals />
      {/* 🔥 PROMO / HERO BANNER */}
      <HeroPromoBanner />
      <AntiTarnishSection />
      <RingsSection />
      <HeroPromoBannerTwo />
      <BraceletsSection />
      <TrustHighlights />
      <CustomerReviews />
      

      
    </>
  );
}