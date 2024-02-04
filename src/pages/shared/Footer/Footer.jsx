import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="text-white grid grid-cols-2 h-[400px]   ">
        {/* contact us */}
        <div className="bg-[#1F2937] h-full flex flex-col justify-center items-center gap-4">
          <p className="text-3xl">CONTACT US</p>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 01987556588</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>
        {/* social media */}
        <div className="bg-[#111827] h-full flex flex-col justify-center items-center gap-4">
          <h1 className="text-3xl">FOLLOW US</h1>
          <p>Join us on Social Media</p>
          {/* social media link */}
          <div className="flex gap-5 text-[30px]">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>

      {/* copy right part */}
      <div className=" footer-center p-4  bg-black text-white">
        <aside>
          <p>
            Copyright © {currentYear}- All right reserved by Captain Culinary   Ltd
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;

/*

        
*/
