import React from "react";
import Video from "./Components/Video";
import Arrobj from "./Components/Data/Data";
import PlayButton from "./Components/PlayButton";
function App() {
  return (
    <>
    <div onClick={()=>console.log("App")}>
      {/* whenever you click on its children(if children has any event) 
    then this event is execute as well as pareant element is also execute. This is event bubbling
    for example:- in this case whenever you click on playbutton then it will execute the functioning 
    of playbutton and the functioning of the div tag also. 
    So to avoid this use e.stopPropagation()*/}
      {Arrobj.map((element) => (
        <Video
          key={element.id}
          title={element.title}
          src={element.src}
          views={element.views}
          time={element.time}
          channel={element.channel}
          logo={element.logo}
          verified={element.verified}
        >
          <PlayButton
            onPause={() => console.log("Playing...")}
            onPlay={() => console.log("Paused...")}
          >
            {element.title}
          </PlayButton>
        </Video>
      ))}
      </div>
    </>
  );
}
export default App;
