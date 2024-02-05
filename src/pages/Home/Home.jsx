import CoverSection from "../shared/CoverSection/CoverSection";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import Banner from "./Banner";
import CategorySlider from "./CategorySlider";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <SectionTitle subTitle="From 11:00am to 10:00pm" mainTitle="order online"></SectionTitle>
          <CategorySlider></CategorySlider>
          <CoverSection></CoverSection>
        </div>
    );
};

export default Home;