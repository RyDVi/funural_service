import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { scrollOffsetFunction } from "utils";

const MainHeader: React.FC<{ nextSectionHref: string }> = ({
  nextSectionHref,
}) => {
  return (
    <section id="mainHeader">
      <img
        className="mainheader-img"
        src="images/main_header.jpg"
        alt="Изображение заголовка"
      />
      <header>
        <div className="header-content">
          <h1>Похоронная служба &#171;Милосердие&#187;</h1>
          <h4>
            <span className="hide-on-mobile">
              Мы поможем проводить ваших родных и близких в последний путь
              достойно
            </span>
          </h4>
        </div>
      </header>
      <a href={nextSectionHref} className="arrow" onClick={scrollOffsetFunction(-56)}>
        <FontAwesomeIcon icon={faAngleDown} />
      </a>
    </section>
  );
};

export default MainHeader;
