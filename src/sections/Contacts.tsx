import React from "react";
import Section, { SectionProps } from "components/Section";
import { Email, PhoneNumber } from "components/Info";
import { ORG_NAME } from "../components/Info";

const Contacts: React.FC<Pick<SectionProps, "isWhiteBlock">> = ({
  isWhiteBlock,
}) => {
  return (
    <Section
      id="contacts"
      title="Контакты"
      isWhiteBlock={isWhiteBlock}
      children={
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="row">
                <div className="col-sm">
                  <div className="d-flex flex-column mb-4 contacts">
                    <h5>Телефоны</h5>
                    <PhoneNumber phone="phone1" />
                    <PhoneNumber phone="phone2" />
                    <PhoneNumber phone="phone3" />
                  </div>
                  <div className="d-flex flex-column mb-4 contacts">
                    <h5>Почта</h5>
                    <Email>katk78@yandex.ru</Email>
                  </div>
                </div>
                <address className="col-sm d-flex flex-column mb-4 contacts">
                  <h5>Адрес</h5>
                  <span>Краснодарский край</span>
                  <span>станица Старощербиновская</span>
                  <span>Улица Энгельса</span>
                  <span>Дом 173/4 (ориентир автовокзал)</span>
                </address>
              </div>
            </div>
            <div className="col-sm">
              <iframe
                title={ORG_NAME}
                className="map"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad271f1d027a7a00517403cbe337bdf7dc94e948ce74cefb531e050c18a01e6f8&amp;source=constructor"
                width="480"
                height="320"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Contacts;
