import instagram from "../Footer/Icons/instagram.png";
import facebook from "../Footer/Icons/facebook.png";
import rss from "../Footer/Icons/rss.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-icons">
          <li>
            <a href="#">
              <img className="instagram" src={instagram} alt="Instagram Icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="facebook" src={facebook} alt="Facebook Icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="rss" src={rss} alt="RSS Icon" />
            </a>
          </li>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Copyright</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
