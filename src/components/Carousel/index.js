import React, { useState } from 'react';
import { Slider, Slide, Button, LeftIcon, RightIcon } from './styles';
import ImgComp from './ImgComp';

import i1 from './img/i1.jpg';
import i2 from './img/i2.jpg';
import i3 from './img/i3.jpg';
import i4 from './img/i4.jpg';

import i1sm from './img/i1-sm.jpg';
import i2sm from './img/i2-sm.jpg';
import i3sm from './img/i3-sm.jpg';
import i4sm from './img/i4-sm.jpg';

function Carousel() {

  let sliderArr = [
    <ImgComp srcsm={i1sm} srcm={i1} label="Porções" />,
    <ImgComp srcsm={i2sm} srcm={i2} label="Porções2"/>,
    <ImgComp srcsm={i3sm} srcm={i3} label="Porções3"/>,
    <ImgComp srcsm={i4sm} srcm={i4} label="Porções4"/>
  ];
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <Slider>
      {
        sliderArr.map((item, index) => {
          return (
            <Slide key={index} style={{ transform: `translateX(${x}%)` }}>
              {item}
            </Slide>
          )
        })
      }
      <Button id="goLeft" onClick={goLeft}> < LeftIcon /> </Button>
      <Button id="goRight" onClick={goRight}> < RightIcon /> </Button>
    </Slider>
  );
}

export default Carousel;