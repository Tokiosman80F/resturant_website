import { Helmet } from "react-helmet-async";
import MenuCover from "../../components/MenuCover";
import contactbannerimage from "../../assets/contact/banner.jpg";
import SectionTitle from "../shared/SectionTitle/SectionTitle";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Captain Culinay | Contact </title>
      </Helmet>
      <MenuCover
        image={contactbannerimage}
        isCoverBanner="true"
        title="OUR shop"
        subtitle="would you like to try a dish"
      ></MenuCover>
      <SectionTitle ></SectionTitle>
    </div>
  );
};

export default Contact;
