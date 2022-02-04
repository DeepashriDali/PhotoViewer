
import './App.css';
import { ImageUrls } from './PhotoViewer/ImageUrls';


// import { PhotoViewer } from './PhotoViewer/PhotoViewer';


function App() {
  return (
      <div>
          <h1>React Photo Viewer</h1>
          {/* <PhotoViewer src={"https://picsum.photos/id/600/1600/900.jpg"}/> */}
          <ImageUrls/>
        
      </div>
  );
}

export default App;
