import { Helmet } from "react-helmet";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Certifications = () => {
      return (
        <section className="skill" id="skills">
            <Helmet>
                <title>Certifications</title>
                <meta
                name="description"
                content="javascript, english, php, python, c++, qt, cybersecurity, sql, programming, cyber security"
                />
            </Helmet>
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <div className="skill-bx">
                    <h2>Certifications</h2>
                    <p>Here are my certifications</p>
                    <ul id="uni-skills">
                        <li className="university-skills">
                            <p>
                                <a href="https://www.credly.com/badges/f971f7bb-a09c-4fa3-8536-2f71183847a0"><b>Cisco Ethical Hacker</b></a> - Earned in november 2023 
                            </p>
                        </li>
                        <li className="university-skills">
                            <p>
                                <a href="https://www.credly.com/badges/ba451e14-64d3-42ee-b7ab-fac7a0373337"><b>Cisco introduction to Cybersecurity</b></a> - Earned in october 2023
                            </p>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
          <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    );
};
