import fifty from "../assets/img/50.svg";
import sixty from "../assets/img/60.svg";
import seventy from "../assets/img/70.svg";
import { Helmet } from "react-helmet";
import eighty from "../assets/img/80.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

const skills = [
  { image: eighty, name: "PhP" },
  { image: eighty, name: "English" },
  { image: seventy, name: "C++" },
  { image: fifty, name: "Python" },
  { image: sixty, name: "Javascript" },
  { image: seventy, name: "Qt" },
];

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Helmet>
        <title>Skills</title>
        <meta
          name="description"
          content="javascript, english, php, python, c++, qt, cybersecurity, sql, programming, cyber security"
        />
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>University skills:</p>
              <ul>
                <li className="university-skills">
                  <p>
                    First year: <b>C</b> programming.
                  </p>
                </li>
                <li className="university-skills">
                  <p>
                    Second year: <b>Qt</b> and <b>C++</b> for{" "}
                    <em>Sensor_Data_Factory</em>. <b>Python</b> for the{" "}
                    <em>Cybersecurity</em> course and <b>PostgreSQL</b> for{" "}
                    <em>Basi di dati</em> course.
                  </p>
                </li>
                <li className="university-skills">
                  <p>
                    Third year: <b>PhP</b>, <b>Javascript</b>, <b>HTML</b>, and{" "}
                    <b>CSS</b> for <em>Tecnologie Web</em> course.
                  </p>
                </li>
                <li className="university-skills">
                  <p>
                    Throughout the years: improved <b>english</b>.
                  </p>
                </li>
                <li className="university-skills">
                  <p>
                    Currently: focusing on <b>Cybersecurity</b>.
                  </p>
                </li>
              </ul>
              <p>These are my abilities:</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((skill, index) => (
                  <div key={index} className="item">
                    <img src={skill.image} />
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
