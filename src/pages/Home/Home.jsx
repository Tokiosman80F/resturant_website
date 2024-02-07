
import CoverSection from "../shared/CoverSection/CoverSection";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import Banner from "./Banner";
import CallUsCover from "./CallUsCover";
import CategorySlider from "./CategorySlider";
import ChefRecommanded from "./ChefRecommanded";
import MenuSectionCover from "./MenuSectionCover";
import PopularMenuSection from "./PopularMenuSection";
const Home = () => {
    return (
        <>
          <Banner/>
          <SectionTitle subTitle="From 11:00am to 10:00pm" mainTitle="order online"/>
          <CategorySlider/>
          <CoverSection/>
          <SectionTitle subTitle="Check it out" mainTitle="from our Popular Item"/>
          <PopularMenuSection></PopularMenuSection>
          <CallUsCover></CallUsCover>
          <SectionTitle subTitle="should try" mainTitle="chef recommanded"/>
          <ChefRecommanded/>
          <MenuSectionCover/>
        </>
    );
};

export default Home;