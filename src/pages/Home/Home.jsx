
import CoverSection from "../shared/CoverSection/CoverSection";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import Banner from "./Banner";
import CategorySlider from "./CategorySlider";
import MenuSection from "./MenuSection";


const Home = () => {
    return (
        <>
          <Banner/>
          <SectionTitle subTitle="From 11:00am to 10:00pm" mainTitle="order online"/>
          <CategorySlider/>
          <CoverSection/>
          <SectionTitle subTitle="Check it out" mainTitle="from our menu"/>
          <MenuSection></MenuSection>
        </>
    );
};

export default Home;