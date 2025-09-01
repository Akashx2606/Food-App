import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cloudinary_url } from "../constants";
import { Link } from "react-router-dom";


// Custom Next Arrow Component
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#6c757d",
        borderRadius: "50%",
        padding: "10px",
        right: "-25px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};

// Custom Previous Arrow Component
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#6c757d",
        borderRadius: "50%",
        padding: "10px",
        left: "-25px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};

const IconCarousel = ({data}) => {
//  console.log(data)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
  // console.log(data)

  return (
    <div style={{ margin: "35px" }}>
 
      <Slider {...settings}>
      
        {
           data.map((item)=>{
            let str = item.action.text;
            if(str.includes(" ")){
                let arr = str.split(" ")
                str = arr.join("")
            }
            if(str.includes("Cakes")) return;
            if(str.includes("Kababs")) return;
            return <Link to={`/items/${str}`}>
                <img src={cloudinary_url + item.imageId}></img>
            </Link>
           })
        }
      </Slider>
    </div>
  );
};

export default IconCarousel




// swiggy -> it was showing restaurants that serves Cakes
// shuwiggy -> it will directly show cakes instead of the restaurants