import './board.css';
import React from 'react';
import FileSaver from 'file-saver';


const Board = (props) => {
  const downloadImageData = () => {
    console.log (props)
    var myJSON = JSON.stringify(props.images);
    var file = new File ([myJSON], `${props.images.tags}`, {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(file);
  }

  return (
    <input onClick={downloadImageData} key={props.images.id} type="image" className="board__image" src={props.images.largeImageURL} alt={props.images.tags}></input>
  )
}

export default Board;