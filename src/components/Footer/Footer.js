import { socialMedia } from "../../utils/constants";
const Footer = () => {
  return (
    <footer>
      <div id="footer__wrapper">
        <h1 id="footer__logo">YOUSOUF</h1>
        <p id="footer__text">All copyrights reserved 2022 © </p>
        <div id="footer__imgs">
          {socialMedia.map((item) => {
            return (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                key={item.name}
              >
                <img src={item.img} alt={item.name} className="footer__img" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
