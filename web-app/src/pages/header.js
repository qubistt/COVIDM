import React from "react";
import './App.css';
import head from './header_img_covid_photo_pea.png'
import fonts from '../assets/fonts.css'




const header = () => {
    return (
        <>
        <div className="header">
        <img className="img1"  src={head} />
        <h1 className="Main">Covidm</h1>



        </div>



        </>

    );
};

export default header;
