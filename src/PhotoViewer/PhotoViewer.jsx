import React,{useState} from "react"    
import { ImageUrls } from "./Images"
import { PhotoDisplayer } from "./PhotoDisplayer"
import { ImageSelector } from "./ImageSelector";
import "./PhotoViewer.css";

export function PhotoViewer() {

    // const [currentImage, setImage] = useState(ImageUrls[0]);
    const [currentImage1, setImage1] = useState(ImageUrls[0]);
    const [currentImage2, setImage2] = useState(ImageUrls[1]);


    return <div>

    <PhotoDisplayer  currentImage1 = {currentImage1} currentImage2 = {currentImage2}/>  
    <ImageSelector ImageUrls = {ImageUrls} 
    // currentImage = {currentImage} setImage ={setImage} 
    currentImage1 = {currentImage1} setImage1 ={setImage1} 
    currentImage2 = {currentImage2} setImage2 ={setImage2} 

    />
    </div>
}
