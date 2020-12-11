import React from "react";
import "./imageSearch.css";

const ImageSearch = (props) => {
    return (
        <div>
            <form onSubmit={props.handleGetRequest}>
                <input className="searchBox" type="text" autoComplete="off" name="searchValue" placeholder="Search for images and videos..." />
                <button className="submitButton">Search</button> 
            </form>    
        </div>
    )
}

export default ImageSearch;