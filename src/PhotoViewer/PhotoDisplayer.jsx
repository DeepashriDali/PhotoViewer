import React from "react";  
import "./PhotoDisplayer.css";




export function PhotoDisplayer({currentImage, currentImage1,currentImage2}) {    
        
    return <div 
    className="hero-pic">
        {/* <img src = {currentImage}  alt ="Main"></img> */}
        <img src = {currentImage1}  alt ="Main"></img>
        <img src = {currentImage2}  alt ="Main"></img>
        </div>
   
}

