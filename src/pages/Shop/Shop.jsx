import { Helmet } from "react-helmet-async";
import shopbannerimage from '../../assets/shop/banner2.jpg'
import MenuCover from "../../components/MenuCover";

const Shop = () => {
    return (
        <>
          <Helmet><title>Captain Culinay | Our Shop  </title></Helmet>
          <MenuCover image={shopbannerimage} isCoverBanner="true" title="OUR shop" subtitle="would you like to try a dish"></MenuCover>  
        </>
    );
};

export default Shop;