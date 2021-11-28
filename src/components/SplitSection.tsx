import React from "react";

interface ContentSectionProps {
  title: React.ReactNode;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, children }) => {
  return (
    <div className="section-content">
      <h3 className="header">{title}</h3>
      {children}
    </div>
  );
};

interface ImageSectionProps {
  imageSrc: string;
  imageAlt: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({ imageSrc, imageAlt }) => {
  return (
    <div className="section-image">
      <img src={imageSrc} alt={imageAlt} />
    </div>
  );
};

export interface SplitSectionProps {
  side: "left" | "right";
}

const SplitSection: React.FC<
  SplitSectionProps & ContentSectionProps & ImageSectionProps
> = ({ side, title, children, ...props }) => {
  const contentSide = <ContentSection title={title}>{children}</ContentSection>;
  const imageContent = <ImageSection {...props} />;
  return (
    <div className={`split-section ${side}`}>
      {contentSide}
      {imageContent}
      <h3 className="header">{title}</h3>
    </div>
  );
};

export default SplitSection;
