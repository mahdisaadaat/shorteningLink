import { FaTelegramPlane, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-content">
        <div className="logo">
          <h2>Mahdisadat</h2>
        </div>
        <div className="mid-content">
          <div className="first-column">
            <h4>Features</h4>
            <ul>
              <li>
                <a href="/">Link Shortening</a>
              </li>
              <li>
                <a href="/">Branded Links</a>
              </li>
              <li>
                <a href="/">Analytics</a>
              </li>
            </ul>
          </div>
          <div className="sec-column">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Developers</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
            </ul>
          </div>
          <div className="third-column">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Our Team</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Contacts</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="social-media">
          <ul>
            <li>
              <FaTelegramPlane />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaWhatsapp />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
