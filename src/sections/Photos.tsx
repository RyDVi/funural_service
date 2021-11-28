import Carousel from "components/Carousel";
import Section from "components/Section";
import { CAROUSEL_IMAGES } from "../constants";
import React from "react";

const Photos: React.FC = () => {
  return (
    <Section title="" id="photos">
      <Carousel images={CAROUSEL_IMAGES} carouselId="main_carousel" />
    </Section>
  );
};

export default Photos;
