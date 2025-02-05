import React from 'react';

import { Img } from './styles';

function ImgComp({ srcsm, srcm, label }) {
  return (
    <>
      <picture className="image" alt="Imagem">
        <source media="(min-widt: 768px)" srcSet={srcm} />
          <source media="(max-widt: 540px)" srcSet={srcsm} />
            <Img src={srcsm} alt="slide-img" />
      </picture>
          <p> {label} </p>
    </>
  );
}
export default ImgComp;