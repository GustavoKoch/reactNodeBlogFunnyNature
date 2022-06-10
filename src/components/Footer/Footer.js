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
              <img src={instagram} alt="Instagram Icon" width="25" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={facebook} alt="Facebook Icon" width="25" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={rss} alt="RSS Icon" width="25" />
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
