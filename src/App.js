import "./App.css";
import { homeVid, images } from "./constants";

function App() {
  return (
    <div className="App">
      <div className="app__video">
        <video
          src={homeVid}
          type="video/mp4"
          loop={true}
          autoPlay={true}
        />
      </div>
    </div>
  );
}

export default App;
