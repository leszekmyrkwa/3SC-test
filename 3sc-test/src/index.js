import React from "react";
import ReactDOM from "react-dom/client";
import PokeAPI from "./components/PokeData";

const App = () => {

    return (
       <div>
        <PokeAPI/>
       </div>
    );

}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);