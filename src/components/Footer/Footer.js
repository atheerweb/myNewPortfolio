import "./Footer.scss";
import linkedIn from "./../../imgs/linkedin.svg";
import github from "./../../imgs/github.svg";
import whatsapp from "./../../imgs/whatsapp.svg";
import facebook from "./../../imgs/facebook.svg";
const Footer = () => {
  const socialMedia = [
    {
      name: "facebook",
      img: facebook,
      link: "https://web.facebook.com/yousouf.shehata/",
    },
    {
      name: "Whatsapp",
      img: whatsapp,
      link: "wa.link/eqt8qd",
    },
    {
      name: "LinkedIn",
      img: linkedIn,
      link: "https://www.linkedin.com/in/yousouf-essa-7029531b7/",
    },
    {
      name: "Github",
      img: github,
      link: "https://github.com/atheerweb",
    },
  ];
  return (
    <footer>
      <div id="footer__wrapper">
        <h1 id="footer__logo">YOUSOUF</h1>
        <p id="footer__text">All copyrights reserved 2022 © </p>
        <div id="footer__imgs">
          {socialMedia.map((item, index) => {
            return (
              <a href={item.link} target="_blank" rel="noreferrer">
                <img
                  src={item.img}
                  alt={item.name}
                  key={index}
                  className="footer__img"
                />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
