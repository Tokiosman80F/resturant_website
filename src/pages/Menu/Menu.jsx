import { Helmet } from "react-helmet-async";
import MenuCover from "../../components/MenuCover";
import menuebannerimage from '../../assets/menu/banner3.jpg'

const Menu = () => {
    return (
        <>
          <Helmet><title>Captain Culinay | Our Menu  </title></Helmet>
          <MenuCover image={menuebannerimage} isCoverBanner="true" title="OUR MENU" subtitle="would you like to try a dish"></MenuCover> 
        </>
    );
};

export default Menu;