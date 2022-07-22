import React from "react";

const Repo = (props) => (
    <li className="flex items-center">
        <div className="w-9/12 overflow-x-hidden">
            <h4 className="text-xl font-semibold text-violet-700"> {props.repo.name}</h4>
            <p className="text-sm text-gray-800 overflow-y-hidden"> {props.repo.description}</p>
            <hr></hr>
        </div>
        <div className="flex-1 text-right">
            <a href={props.repo.html_url} target="_blank" rel="noopener noreferrer"> Visitar</a>
        </div>
    </li>
);

export default Repo;