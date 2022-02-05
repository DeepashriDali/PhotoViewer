import React,{useState} from "react"    
import { ImageUrls } from "./Images"
import { PhotoDisplayer } from "./PhotoDisplayer"
import { ImageSelector } from "./ImageSelector";
import "./PhotoViewer.css";

export function PhotoViewer() {

    const [currentImage, setImage] = useState(ImageUrls[0]);

    return <div>
    <PhotoDisplayer currentImage = {currentImage}/>  
    <ImageSelector ImageUrls = {ImageUrls} currentImage = {currentImage} setImage ={setImage} />
    </div>
}