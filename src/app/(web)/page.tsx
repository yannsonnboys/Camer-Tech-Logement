import FeaturedRoom from "@/components/FeaturedRoom/FeaturedRoom";
import Gallery from "@/components/Gallery/Gallery";
import HeroSection from "@/components/HeroSection/HeroSection";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import PageSearch from "@/components/PageSearch/PageSearch";
import { getFeaturedRoom } from "@/libs/apis";

const Home = async () =>  {

  const featuredRoom = await getFeaturedRoom();

  // console.log(featuredRoom);

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Page Search Section */}
      <PageSearch />

      {/* Features Room Section */}
      <FeaturedRoom featuredRoom={featuredRoom} />

      {/* Gallery Section */}
      <Gallery />

      {/* New Letter Section */}
      <NewsLetter />
    </>
  );
};

export default Home; 
