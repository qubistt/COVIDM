import React from "react";
import './App.css';
import head from './header_img_covid_photo_pea.png'
import fonts from '../assets/fonts.css'




const header = () => {
    return (
        <>
        <div className="scroll-container">
        <img className="img1"  src={head} />
        <div classname="scroll-text">
        <h1 className="Main">Covidm</h1>

        </div>
        



        </div>



        </>

    );
};

export default header;
