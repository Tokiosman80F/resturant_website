
import CoverSection from "../shared/CoverSection/CoverSection";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import Banner from "./Banner";
import CallUsCover from "./CallUsCover";
import CategorySlider from "./CategorySlider";
import ChefRecommanded from "./ChefRecommanded";
import MenuSectionCover from "./MenuSectionCover";
import PopularMenuSection from "./PopularMenuSection";
import Testimonial from "./Testimonial";
import { Helmet } from "react-helmet-async";
const Home = () => {
    return (
        <>
          <Helmet><title>Captain Culinay | Home  </title></Helmet>
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
          <SectionTitle subTitle="what our client say" mainTitle="testimonial"/>
          <Testimonial></Testimonial>
        </>
    );
};

export default Home;