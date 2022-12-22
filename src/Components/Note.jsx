import React from "react";
let title = "title";
let content = "content";

function Note(props){
    return <div className = "note">
        <h1 className = "h1" >{props.title}</h1>
        <p className = "p" >{props.content}</p>
    </div>;
}

export default Note;