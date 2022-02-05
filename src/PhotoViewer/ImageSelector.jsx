import React from "react";  
import "./ImageSelector.css";


export function ImageSelector({setImage , currentImage, ImageUrls}) {
   
    return (
        <div className="image-selector">
            {ImageUrls.map((url, index)=>(
                    <div className={`image-selector__thumbnail ${currentImage === url ? "selected" : ""}`}  key = {index}>
                        <img src = {url} alt = "" 
                        onClick ={()=>setImage(url)}/>
                    </div>
                   ))
            }
        </div>)
}
    
