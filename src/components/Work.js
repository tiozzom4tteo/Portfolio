import { Helmet } from "react-helmet";

export const Work = () => {
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
                      <b>Cybersecurity & AI Research Internship</b> in <a href="https://www.unipd.it/">University of Padua</a>.<br/>
                      Sep 2024 - Nov 2024
                    </p>
                  </li>
                  <li className="work-skills">
                    <p>
                      <b>Security Operation Center Specialist</b> in <a href="https://www.sanmarcoinformatica.com/smitech/">Sanmarco Informatica S.p.a.</a><br/>
                      Apr 24 - Aug 24
                    </p>
                  </li>
                  <li className="work-skills">
                    <p>
                      <b>Software Developer</b> in <a href="https://www.city-ware.it/">Cityware Engineering S.r.l.</a> <br/>
                      Mar 2023 - May 2023
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
  };
  
