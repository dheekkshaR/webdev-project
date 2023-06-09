import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { Link } from "react-router-dom";


const SimpleSliderComponent = ({ movies }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear"
  };
  console.log(movies)
  return (
    <>
      <div className="slider-wrapper">
        <Slider {...settings} arrows={false}>
          {movies.map((movie,index) => (
              <Link key={index} to={`/details/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title} // Set the height and width of the image
                style={{ height: "500px", width: "100%" }}
              />
            </Link>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SimpleSliderComponent;
