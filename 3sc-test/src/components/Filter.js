import React from "react";
import './Filter.scss';

export default function Filter(props) {

    return (
        <div className="filter">
            <p>Filter by</p>
            <ul>
                <li data-generation='1' onClick={props.filterByGeneration()}>
                    Generation 1
                </li>
                <li data-generation='2' onClick={props.filterByGeneration()}>
                    Generation 2
                </li>
                <li data-generation='3' onClick={props.filterByGeneration()}>
                    Generation 3
                </li>
                <li data-generation='4' onClick={props.filterByGeneration()}>
                    Generation 4
                </li>
                <li data-generation='5' onClick={props.filterByGeneration()}>
                    Generation 5
                </li>
                <li data-generation='6' onClick={props.filterByGeneration()}>
                    Generation 6
                </li>
                <li data-generation='7' onClick={props.filterByGeneration()}>
                    Generation 7
                </li>
                <li data-generation='8' onClick={props.filterByGeneration()}>
                    Generation 8
                </li>
                <li data-generation='9' onClick={props.filterByGeneration()}>
                    Generation 9
                </li>
            </ul>
        </div>
    );

}