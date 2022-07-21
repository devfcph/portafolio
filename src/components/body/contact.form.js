import React from "react";

const FormularioContacto = () => (

    <div className="mx-auto p-4 max-w-screen-md justify-center items-center">
        <form className="text-center">
            <label className="block text-2xl mb-3" for="contact-textarea">Texto de la etiqueta</label>
            <div className="flex shadow-2xl rounded bg-white border p-1">
                <textarea className="flex-1 py-4 px-10 focus:outline-none focus:shadow-md focus:shadow-fuchsia-800"
                    id="contact-textarea"
                    name="contact-textarea"
                >
                </textarea>
                <button>Enviar</button>
            </div>
        </form>

    </div>

)

export default FormularioContacto