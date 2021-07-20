import React from "react";
import Info from "../../components/Info/Info";
import Slider from "../../components/Slider/Slider";
import slider2data from "../../components/Slider/Slider2data";
import sliderdata from "../../components/Slider/Sliderdata";
import { homeObjOne, homeObjTwo, homeObjFour } from "./Data";
import Blank from "../Blank";
import Footer from "../../components/Footer/Footer";


function Home() {
  return (
    <>
    <Slider data={sliderdata}/>
      <Info {...homeObjOne} />
      <Slider data={slider2data}/> 
      <Info {...homeObjTwo} />   
      <Info {...homeObjFour} />
      <Blank />
      <Footer />
    </>
  );
}

export default Home;
