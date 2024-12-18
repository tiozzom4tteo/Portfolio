import { Helmet } from "react-helmet";
import "../App.css"; 

export const Instruction = () => {
  return (
    <section className="education" id="educations">
        <Helmet>
            <title>Education</title>
            <meta
            name="description"
            content="Education, University of Padua, ITI Francesco Severi, computer science"
            />
        </Helmet>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="instruction-bx">
                        <h2>Education</h2>
                        <ul id="instruction-skills">
                        <li className="instruction-skills">
                            <p>
                                <b>Bachelor in Computer Science at <a href="#">University of Padua</a> </b><br/>
                                Relevant coursework: Object Oriented Programming, Data
                                Structures & Algorithms, Cybersecurity, Software Engineering,
                                Web Technologies<br/>
                                Graduation score: 95/110<br/>
                                <a href="https://openbadges.bestr.it/public/assertions/2t0LXMb4TyynUSo6QkaQ5A">Certification badge</a><br/>
                                Sep 2021 - Dec 2024
                            </p>
                        </li>
                        <li className="instruction-skills">
                            <p>
                                <b>High school diploma in Electrical Engineering at <a href="#">ITIS Levi-Ponti</a></b><br/>
                                Graduation score: 95/100<br/>
                                Sep 2015 - Jul 2020
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
