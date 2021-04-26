import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

export default function Player({ file }) {
  return (
    <AudioPlayer
      autoPlay
      src={file}
      onPlay={(e) => console.log("onPlay")}
      // other props here
    />
  );
}
