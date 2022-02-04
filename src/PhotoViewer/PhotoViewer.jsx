import React from "react";  
import "./PhotoViewer.css"



export function PhotoViewer(props) {    
        
    if(!props.src){
        return <div>
            <img src="https://picsum.photos/id/237/200/300" alt =""></img>
            <img src="https://picsum.photos/id/297/200/300" alt =""></img>
            <img src="https://picsum.photos/id/127/200/300" alt =""></img>
            <img src="https://picsum.photos/id/1009/200/300" alt =""></img>
            <img src="https://picsum.photos/id/265/200/300" alt =""></img>
        </div>
    
    }
        return <div><img src = {props.src}  alt =""></img></div>
}