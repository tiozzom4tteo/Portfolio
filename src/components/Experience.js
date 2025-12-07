import { Helmet } from "react-helmet";

export const Experience = () => {
  return (
      <section className="experience" id="experiences">
        <Helmet>
          <title>SMDCyberChallenge, Hackathon</title>
          <meta
            name="description"
            content="#SMDCyberChallenge, Hackathon, Stato Maggiore Difesa, cyber security, #MissioneCyberChallenge, CTF, cryptography, reverse engineering, forensics, web security, rome"
          />
        </Helmet>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="work-bx">
                <h2>Hackathon Experience</h2>
                <ul id="experience-skills">
                    <li className="experience-skills">
                        <p>
                            <b>
                                <a href="https://smdcyberchallenge.cybersecnatlab.it/" target="_blank" rel="noreferrer">SMDCyberChallenge</a>
                            </b>
                            <br/>
                            Partecipant - December 2025 <br/>
                            Cyber Security focused Capture The Flag (CTF) event organized by the Stato Maggiore Difesa in Rome. The competition featured 18 challenges across web security, cryptography, reverse engineering, and forensics. A total of 40 teams from across Italy took part, each made up of four members. Only 160 participants were selected from more than 700 applicants. <br/>
                        </p>
                    </li>
                    <li className="experience-skills">
                        <p>
                            <b> 
                                <a href="https://github.com/tiozzom4tteo/UNOX-Hackathon" target="_blank" rel="noreferrer">Unox S.p.A</a>
                            </b >
                            <br/>
                            Partecipant - March 2024 <br/>
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
  
