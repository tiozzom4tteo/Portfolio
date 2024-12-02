import { Helmet } from "react-helmet";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
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
              <ul id="uni-skills">
              <li className="university-skills">
                  <p>
                   <b>Burp Suite, Ghidra, Nmap, Metasploit, Wireshark, IDA Free, Radare2 and Detect It Easy (DiE)</b> are tools I've explored out of personal curiosity and to enhance my cybersecurity skills
                  </p>
                </li>
                <li className="university-skills">
                  <p>
                    <b>Python</b> for the <em>Cybersecurity</em> course and for{" "}
                    <em>
                      <a href="https://github.com/tiozzom4tteo/UNOX-Hackathon">
                        Unox S.p.A Hackathon
                      </a>
                    </em>
                  </p>
                </li>
                <li className="university-skills">
                  <p>
                    <b>C</b> programming
                  </p>
                </li>
                <li className="university-skills">
                  <p>
                    <b>Redpanda</b>, <b>Apache Flink</b> and <b>Python</b> for{" "}
                    <em>
                      <a href="https://github.com/tiozzom4tteo/SyncCity">
                        SyncCity
                      </a>
                    </em>{" "}
                    project
                  </p>
                </li>
                <li className="university-skills">
                  <p>
                    <b>Qt</b> and <b>C++</b> for{" "}
                    <em>
                      <a href="https://github.com/tiozzom4tteo/Sensor_Data_Factory/blob/main/README.md">
                        Sensor_Data_Factory
                      </a>
                    </em>
                  </p>
                </li>
                <li className="university-skills">
                  <p>
                    <b>PostgreSQL</b> for{" "}
                    <em>
                      <a href="https://github.com/tiozzom4tteo/Park-North-Italy-Srl">
                        Basi di dati
                      </a>
                    </em>{" "}
                    course
                  </p>
                </li>
                <li className="university-skills">
                  <p>
                    <b>Javascript</b>, <b>PhP</b>, <b>HTML</b>, and <b>CSS</b>{" "}
                    for{" "}
                    <em>
                      <a href="https://github.com/tiozzom4tteo/TecWeb/tree/master">
                        Tecnologie Web
                      </a>
                    </em>{" "}
                    course
                  </p>
                </li>
                <li className="university-skills">
                  <p>
                    <b>English</b>
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
