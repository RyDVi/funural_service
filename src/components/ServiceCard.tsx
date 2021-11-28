import React from "react";

const ServiceCard: React.FC<{
  src: string;
  title: string;
  text: string;
}> = ({ src, title, text }) => {
  return (
    <div className="card service-card">
      <img className="card-img-top service-card-img" src={src} alt=""></img>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
