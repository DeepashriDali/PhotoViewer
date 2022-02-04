import React from "react";
import { MyComponent } from "./MyComponent";

export function HelloWorld (props){
    if(!props.name){
        return <div> Hello, world!


        </div>

    }
    return <div> Hello {props.name}! <MyComponent/> City: {props.city}!
       
    </div>
}