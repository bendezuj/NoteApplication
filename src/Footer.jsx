import React from "react";

let year = new Date().getFullYear();

function Footer(){
    return <footer> <p className="p"> Copyright Jeanpierre Bendezu @{year} </p> </footer>;
}

export default Footer;