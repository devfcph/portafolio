import React from "react"
import illustration from "../../images/me_control.svg";

const Header = () => (
    <header className="bg-fuchsia-800">
        <div className="container mx-auto p-12 max-w-4xl flex justify-center items-center">
            <div className="flex-1">
                <h1 className="text-5xl text-orange-100 text-left">Francisco Pérez Hernández</h1>
                <br></br>
                <p className="text-2xl text-orange-100 font-semibold">Fullstack Developer</p>
            </div>
            <img src={illustration} alt="Control de versiones" style={{ height: "300px" }}></img>
        </div>
    </header>
)

export default Header