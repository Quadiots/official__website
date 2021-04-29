import React from "react";
import "../../css/Cards/PortfolioCard.css";
import Tilt from "react-parallax-tilt";

const PortfolioCard = ({ img, names, role, desc }) => {
  return (
    <div className="tilt__card">
      <Tilt
        className="parallax-effect-glare-scale"
        perspective={800}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.02}
      >
        <div className="portfolioCard__container">
          <div className="logo">
            <img className="portfolioCard__logo" src={img} alt="" />
          </div>
          <h1 className="portfolioCard__name">{names}</h1>
          <h3 className="portfolioCard__roles">{role}</h3>
          <h5 className="portfolioCard__description">{desc}</h5>
        </div>
      </Tilt>
    </div>
  );
};

export default PortfolioCard;
