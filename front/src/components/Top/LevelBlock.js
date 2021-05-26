import React from 'react';
import LevelCard from './LevelCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LevelBlock = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
      <div className="level-block">
        <h3>{props.LevelBlockTitle}</h3>
        <Slider {...settings}  style={{textAlign:"center"}}>
          <LevelCard level={"LEVEL1"} condition={"習得済"}/>
          <LevelCard level={"LEVEL2"} condition={"習得中"}/>
          <LevelCard level={"LEVEL3"} condition={"未習得"}/>
          <LevelCard level={"LEVEL4"} condition={"未習得"}/>
          <LevelCard level={"LEVEL5"} condition={"未習得"}/>
          <LevelCard level={"LEVEL6"} condition={"未習得"}/>
        </Slider>
      </div>
  );
};

export default LevelBlock;