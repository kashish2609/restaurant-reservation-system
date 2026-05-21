import React from "react";
import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
          A team is a group of individuals working together towards a common goal, where each member brings their 
          unique skills, knowledge, and perspectives. Teamwork is the collaborative effort of these individuals, 
          fostering a supportive and cooperative environment. By combining strengths and complementing each other's 
          weaknesses, a well-functioning team is able to achieve far more than what each person could accomplish 
          alone. Effective communication, trust, and mutual respect are key to successful teamwork, allowing the 
          team to overcome challenges, innovate, and accomplish goals efficiently.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
