import React from "react";

interface InfoProps extends Pick<HTMLImageElement, "src" | "alt"> {}

const Info: React.FC<InfoProps> = ({ alt, src, children }) => (
  <div className="info">
    <img src={src} alt={alt} />
    {children}
  </div>
);

export default Info;

export const ORG_NAME = "Похоронная служба «Милосердие»";

const EMAIL = "bamburka75@gmail.com";

const PHONES = {
  phone1: "8 (952) 867-92-82",
  phone2: "8 (952) 865-80-86",
  phone3: "8 (928) 271-27-40",
};

interface PhoneNumberProps {
  phone: keyof typeof PHONES;
}
export const PhoneNumber: React.FC<PhoneNumberProps> = ({ phone }) => (
  <a href={`tel:${PHONES[phone]}`}>{PHONES[phone]}</a>
);

export const Email: React.FC = () => <a href={`mailto: ${EMAIL}`}>{EMAIL}</a>;

export const Logo: React.FC = () => (
  <img src="icons/logo/logo256.ico" alt="Логотип" />
);

export const InfoPhoneNumber: React.FC<PhoneNumberProps> = ({ phone }) => (
  <Info src="icons/телефон.png" alt="Номер телефона">
    <PhoneNumber phone={phone} />
  </Info>
);

export const InfoEmail: React.FC = () => (
  <Info src="icons/письмо.png" alt="Почта">
    <Email />
  </Info>
);
