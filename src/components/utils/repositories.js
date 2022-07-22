import React from "react";
import repos from "../../data/github/data.repositories";
import Repository from "../body/repository";

const Respositories = () => (
    <div className="container mx-auto p-12 max-w-4xl">
        <header className=" text-center">
            <h2 className="text-3xl font-semibold ">Mis repositorios en GitHub</h2>
            <p>Proyectos propios :)</p>
        </header>
        <ul className="repos-list">
            {
                repos.map((repository) => {
                    //Aquí se formará el html para que los repositorios se vean bonitos y bien acomodados
                    return <Repository repo={repository} key={repository.id} />
                })
            }
        </ul>
    </div>
);

export default Respositories;