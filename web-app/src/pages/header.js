// import React from "react";
 import './App.css';
// import head from './header_img_covid_photo_pea.png'
import fonts from '../assets/fonts.css'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom';









const header = () => {

    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    let history = useHistory;
  
    return (
        // Css pro animations lol
        <>

  

 <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <span style={{ fontSize: "3em" }}>Welcome to Covidm</span>
          {/* <p  style={{ fontSize: "3em" }}>Scroll down </p>  */}
          {/* Need to edit to the the P's and the Color mode */}
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <span style={{ fontSize: "3em" }}>the only app needed for you to fight the virus</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "3em" }}>Find</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <div className="Sub-heading">
          <span style={{ fontSize: "3em" }}>
            <Animator animation={MoveIn(-1000, 0)}>Beds</Animator>
            <Animator animation={MoveIn(1000, 0)}>hospitals</Animator>
            <Animator animation={MoveOut(1000, 0)}>Food</Animator>
            <Animator animation={MoveOut(-1000, 0)}>doctors</Animator>
          </span>
        </div>
      </ScrollPage>
      <ScrollPage page={4}>
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: "3em" }}></span>
          <span style={{ fontSize: "3em" }}>
            Stay safe and healthy
          </span>
        </Animator>
      </ScrollPage>
    </ScrollContainer>

<button
onClick={() =>{
    history.push("./Search_bar");
}}>GO!</button>





  








        </>

    );
};

export default header;
