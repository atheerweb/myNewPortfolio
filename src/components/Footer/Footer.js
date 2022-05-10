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
    },
    {
      name: "Whatsapp",
      img: whatsapp,
    },
    {
      name: "LinkedIn",
      img: linkedIn,
    },
    {
      name: "Github",
      img: github,
    },
  ];
  return (
    <footer>
      <div id="footer__wrapper">
        <h1 className="logo">YOUSOUF</h1>
        <p>All copyrights reserved 2022 © </p>
        <div id="footer__imgs__wrapper">
          {socialMedia.map((item, index) => {
            return <img src={item.img} alt={item.name} key={index} className="footer__img" />;
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
