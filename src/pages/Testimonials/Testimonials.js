import { motion } from "framer-motion";
import {
  sections,
  animationConfiguration,
} from "../../utils/constants";

function Testimonials() {

  return (
    <div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      transition="transition"
    >
      {sections.map((section) => {
        return (
          <section className="sections__container" id={section} key={section}>
            <div className="title__wrapper">
              <div className="title__bar__wrapper">
                <div className="title__bar"></div>
              </div>
              <h1 className="home__titles">{section}</h1>
              <div className="title__bar__wrapper" id="bottom__right">
                <div className="title__bar"></div>
              </div>
            </div>

            <div id={`${section}__wrapper`}>
              {/* {companies.map((company) => {
                  return (
                    <div className="reviews__wrapper" key={company.name}>
                      <img
                        src={require(`./../../assets/images/${company.logo}.svg`)}
                        key={company.name}
                        alt={company.name}
                        id={`${company.name}__img`}
                      />
                      <p id="review__text">{company.text}</p>
                      <div className="reviewer__wrapper">
                        <p id="reviewer">{company.reviewer}</p>
                      </div>
                    </div>
                  );
                })} */}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Testimonials;
