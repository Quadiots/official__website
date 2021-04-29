import React, { useState } from "react";
import "../../css/Cards/Portfolio.css";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  const [person, setPerson] = useState([
    {
      img:
        "https://firebasestorage.googleapis.com/v0/b/clone-5c1a3.appspot.com/o/ATHARVA_1.jpg?alt=media&token=f3190973-387c-4e3f-bde8-c2213f67eb7a",
      names: "Atharva Shinde",
      role: "React Developer",
      desc:
        "I am a React Developer. I work as an intern for React Development at FusionTech",
    },
    {
      img:
        "https://firebasestorage.googleapis.com/v0/b/clone-5c1a3.appspot.com/o/sid_portfolio.jpg?alt=media&token=3fe4e5f6-0d9f-4f77-8b31-0a6b54dd1b37",
      names: "Siddhant Chandorkar",
      role: "ML Engineer",
      desc:
        "I am a ML Expert. I work as an intern for Machine Learning at FusionTech",
    },
    {
      img:
        "https://media-exp1.licdn.com/dms/image/C4E03AQG7jFiJ0g4jQg/profile-displayphoto-shrink_800_800/0/1612866667614?e=1625097600&v=beta&t=fTx7OQiadSBK3IWwu7Wk8XMY3E6aJ1li1_4y7barX3M",
      names: "Shubham Dalvi",
      role: "React Developer",
      desc:
        "I am a React Developer. I work as an intern for React Development at FusionTech",
    },
    {
      img:
        "https://firebasestorage.googleapis.com/v0/b/clone-5c1a3.appspot.com/o/RK.jpeg?alt=media&token=5bd1983c-97a0-4b11-ab1b-c24903e8f76b",
      names: "Rajeev Kaviskar",
      role: "Graphics Designer",
      desc:
        "I am a Graphics Designer. I work as an intern for ML at FusionTech",
    },
  ]);

  return (
    <div className="portfolio__container">
      {person.map((item) => (
        <PortfolioCard
          img={item.img}
          names={item.names}
          role={item.role}
          desc={item.desc}
        />
      ))}
    </div>
  );
};

export default Portfolio;
