import React,{useState} from "react"    
import "./ImageSelector.css";


export function ImageSelector({setImage1 , setImage2, currentImage1, currentImage2, ImageUrls}) {
 
    const[ count, setCount] = useState (0);
     return (
         <div className="image-selector">
             {ImageUrls.map((url, index)=>(
                     <div className={`image-selector__thumbnail ${(currentImage1 === url
                      || currentImage2 === url )? "selected" : ""}`}  key = {index}>
                         <img src = {url} alt = "" 
                         onClick ={()=>{
                             setCount(count + 1)
                             if (count % 2 === 0){
                                 setImage2(url)    
                             } else{
                                 setImage1(url)}}
                             }
                       />     
                     </div>
                    ))
             }
         </div>)
 }
    
