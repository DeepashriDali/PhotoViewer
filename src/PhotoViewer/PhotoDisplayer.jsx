import React from "react";  
import "./PhotoDisplayer.css";




export function PhotoDisplayer({currentImage}) {    
        
         return <div className="hero-pic"><img src = {currentImage}  alt ="Main"></img></div>
        
}
