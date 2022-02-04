import React,{useState} from "react";  
// import "./PhotoViewer.css"

const brokenImages = [
    1, 24, 32, 36, 44, 47
];

export function ImageUrls() {
    const urls = [];
 
    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push(`https://picsum.photos/id/6${imageNumberString}/150/150.jpg`)
        }
    }
    const [currentImage, setImage] = useState(urls[0]);


    return (
    <div>
       <img  src = {currentImage} alt = "" ></img>
        <ul>
            {
               urls.map((url)=>(
                    <li  onClick ={()=>setImage(url)}><img src = {url} alt = "" ></img></li>
               ))
            }
        </ul>
    </div>)

}

// export const ImageUrls = GetImageUrls();