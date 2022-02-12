import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  adaptiveHeight: true,
  accessibility: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Slick = ({ imgs }) => {
  return (
    <div style={{ paddingRight: "3%", paddingLeft: "3%" }}>
      <Slider {...settings}>
        {imgs.map((i, ind) => (
          <img key={ind} src={i} alt="error" height={150} />
        ))}
      </Slider>
    </div>
  );
};

export default Slick;
