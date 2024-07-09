import React from "react";
import TareaFormulario from "./TareaFormulario";
import "../hojas-de-estilo/ListaTareas.css"

function ListaTareas() {
    return (
        <>
            <TareaFormulario/>
            <div className="tareas-lista-contenedor">
                LISTA DE TAREAS
            </div>
        </>
    );

}

export default ListaTareas;