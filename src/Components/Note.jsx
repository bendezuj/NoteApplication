import React from "react";
let title = "title";
let content = "content";

function Note(){
    return <div className = "note">
        <h1 className = "h1" >{title}</h1>
        <p className = "p" >{content}</p>
    </div>;
}

export default Note;