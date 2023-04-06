import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Video from './components/Video';
import './components/Data'
import Arrobj from './components/Data';
import PlayButton from './components/PlayButton'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {
      Arrobj.map(
        (element)=><Video
        id={element.id}
        src={element.src}
        title={element.title}
        time={element.title}
        channel={element.channel}
         >
          <PlayButton  onPlay={()=>console.log("Playing...")} onPause={()=>console.log("Paused..")}>Play</PlayButton>

        </Video>
      )
    }
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
