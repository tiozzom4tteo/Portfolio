import { Helmet } from "react-helmet";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";



export const Work = () => {
    // const responsive = {
    //     superLargeDesktop: {
    //       // the naming can be any, depends on you.
    //       breakpoint: { max: 4000, min: 3000 },
    //       items: 5,
    //     },
    //     desktop: {
    //       breakpoint: { max: 3000, min: 1024 },
    //       items: 3,
    //     },
    //     tablet: {
    //       breakpoint: { max: 1024, min: 464 },
    //       items: 2,
    //     },
    //     mobile: {
    //       breakpoint: { max: 464, min: 0 },
    //       items: 1,
    //     },
    //   };

    return (
        <section className="work" id="works">
        <Helmet>
          <title>Work Experience</title>
          <meta
            name="description"
            content="javascript, english, php, python, c++, qt, cybersecurity, sql, programming, cyber security"
          />
        </Helmet>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="work-bx">
                <h2>Work Experience</h2>
                <ul id="work-skills">
                    <li className="work-skills">
                        <p>
                            <b>Security Operation Specialist</b> in <a href="https://www.sanmarcoinformatica.com/smitech/"> Sanmarco Informatica S.p.a. </a>
                        </p>
                    </li>
                    <li className="work-skills">
                        <p>
                            <b>Software Developer</b> in <a href="https://www.city-ware.it/"> Cityware Engineering S.r.l.</a>
                        </p>
                    </li>
                    <li className="work-skills">
                        <p>
                            <b>Civil and industrial electrician</b> in <a href="https://www.tecnoimpiantinet.it/">Tecnoimpianti S.r.l.</a>
                        </p>
                    </li>
                </ul>
                {/* <Carousel
                //   responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  {skills.map((skill, index) => (
                    <div key={index} className="item">
                      <img src={skill.image} />
                      <h5>{skill.name}</h5>
                    </div>
                  ))}
                </Carousel> */}
              </div>
            </div>
          </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
      </section>
    );
  };
  
