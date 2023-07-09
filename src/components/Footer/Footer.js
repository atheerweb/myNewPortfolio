import { socialMedia } from "../../utils/constants";
const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-primaryColor p-10">
      <div className="text-center text-white flex flex-col gap-3">
        <h1 className="font-serif text-3xl">YOUSOUF</h1>
        <p className="text-sm font-light">All copyrights reserved 2022 © </p>
        <div className="flex items-center justify-center gap-5">
          {socialMedia.map((item) => {
            return (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                key={item.name}
              >
                <img src={item.img} alt={item.name} className="w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
