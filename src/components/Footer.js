import "../assets/styles/Footer.css";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="logo">
          <div className="logo-company-footer">moonpig</div>
          <div className="logo-space">|</div>
          <div className="logo-slogan">Creating Moments that Matter</div>
        </div>{" "}
        <p>
          To buy cards, please go to the official website{" "}
          <a href="https://www.moonpig.com/uk/">© Moonpig.com</a> Limited 2024.
        </p>
        <p>
          Registered company address is Herbal House, 10 Back Hill, London EC1R
          5EN, UK. A place close to your heart.
        </p>
        <div className="social-icons">
          <p className="social-media-links">Social Media Links</p>
          <ul>
            <li>
              <a href="https://twitter.com/moonpiguk" target="_blank">
                <FaTwitter size={30} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/Moonpig/" target="_blank">
                <FaFacebook size={30} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/moonpig/" target="_blank">
                <FaInstagram size={30} />
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.co.uk/moonpig/" target="_blank">
                <FaPinterest size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://www.pinterest.co.uk/moonpiggroup/"
                target="_blank"
              >
                <FaYoutube size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
