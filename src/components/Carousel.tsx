import React from "react";

export interface ImageProps {
  src: string;
  alt: string;
}

interface CarouselImageProps {
  isActive?: boolean;
}

const CarouselImage: React.FC<CarouselImageProps & ImageProps> = ({
  isActive,
  src,
  alt,
}) => (
  <div className={`carousel-item ${isActive ? "active" : ""}`}>
    <img className="d-block w-100" src={src} alt={alt} loading="lazy" />
  </div>
);

const CarouselButton: React.FC<
  {
    ariaLabel: string;
    carouselId: string;
    slide: number;
  } & CarouselImageProps
> = ({ ariaLabel, carouselId, slide, isActive }) => (
  <button
    type="button"
    data-bs-target={"#" + carouselId}
    data-bs-slide-to={slide}
    className={isActive ? "active" : ""}
    aria-label={ariaLabel}
  ></button>
);

interface CarouselProps {
  carouselId: string;
  images: ImageProps[];
  indicators?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  carouselId,
  indicators,
}) => {
  return (
    <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
      {indicators && (
        <div className="carousel-indicators">
          {images.map((image, index) => (
            <CarouselButton
              key={image.src}
              ariaLabel={image.alt}
              carouselId={carouselId}
              slide={index}
              isActive={index === 0}
            />
          ))}
        </div>
      )}
      <div className="carousel-inner">
        {images.slice(0).map((image, index) => (
          <CarouselImage key={image.src} {...image} isActive={index === 0} />
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={"#" + carouselId}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={"#" + carouselId}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
