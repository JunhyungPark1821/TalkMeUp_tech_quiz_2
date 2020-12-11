import './boardVideo.css';
import React from 'react';
import FileSaver from 'file-saver';


const BoardVideo = (props) => {
    const downloadVideoData = () => {
        var myJSON = JSON.stringify(props.videos);
        var file = new File ([myJSON], `${props.videos.tags}`, {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(file);
    }

    return (
        <button className="tile">
            <video onClick={downloadVideoData} className="tileVideo" src={props.videos.videos.small.url} autoPlay/> 
        </button>
    )
}

export default BoardVideo;