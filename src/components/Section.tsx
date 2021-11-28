import React from "react";

export interface SectionProps{
  id: string;
  title: string;
  isWhiteBlock?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, isWhiteBlock, children }) => {
  return (
    <article
      id={id}
      className={`container section ${
        isWhiteBlock ? "white-block" : ""
      }`}
    >
      <div className="d-flex justify-content-center">
        <hr className="header-line" />
        <h2>{title}</h2>
        <hr className="header-line" />
      </div>
      <div className={`${isWhiteBlock ? "content-white" : "content-black"}`}>
        {children}
      </div>
    </article>
  );
};

export default Section;
