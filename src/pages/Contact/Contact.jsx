import { Helmet } from "react-helmet-async";
import MenuCover from "../../components/MenuCover";
import contactbannerimage from "../../assets/contact/banner.jpg"

const Contact = () => {
    return (
        <div>
            <Helmet><title>Captain Culinay | Contact  </title></Helmet>
            <MenuCover image={contactbannerimage} isCoverBanner="true" title="OUR shop" subtitle="would you like to try a dish"></MenuCover>  
        </div>
    );
};

export default Contact;