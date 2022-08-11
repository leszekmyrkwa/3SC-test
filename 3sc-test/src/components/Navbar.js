import React from "react";
import './Navbar.scss';

export default function Navbar(props) {

    return (
        <nav>
            <button onClick={props.backToHome}>Home</button>
            <button>Favourites</button>
        </nav>
    );

}