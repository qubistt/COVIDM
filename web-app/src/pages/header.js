import React from "react";
import './App.css';
import head from './header_img_covid_photo_pea.png'


const header = () => {
    return (
        <>
        <div className="header">
        <img className="img1"  src={head} />
        <h1>Covidm</h1>

        </div>



        </>

    );
};

export default header;
