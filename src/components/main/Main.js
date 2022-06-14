import React from "react";

import ImageBlock from "../ImageBlock/ImageBlock.js";
import img1 from "../../img/img1.jpeg";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.jpeg";
import img4 from "../../img/img4.jpeg";
import img5 from "../../img/img5.jpeg";
import "./Main.css";

function Main(props) {
  return (
    <div className="main">
      <ImageBlock text="hey" src={img1} />
      <ImageBlock text="let's" src={img2} />
      <ImageBlock text="give" src={img3} />
      <ImageBlock text="all" src={img4} />
      <ImageBlock text="you can" src={img5} />
    </div>
  );
}

export default Main;
