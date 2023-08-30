import { useState } from "react";


export default function Formulario({ aoPublicar}){


    const [texto, setTexto] = useState('');
    const [titulo, setTitulo] = useState('')


    function aoAlterar(evento) {
        setTexto(evento.target.value);
        console.log(evento.target.value)
    }


    function aoClicar(evento){
        aoPublicar(titulo, texto);
    }


    function aoAlterarTitulo(evento){
        setTitulo(evento.target.value);
    }


    return (
        <form className="formulario">
            <input type = "text" onChange={aoAlterarTitulo}/>
            <textarea onChange={aoAlterar}></textarea>
            <button type="button" onClick={aoClicar}>Publicar</button>
        </form>
    );
}

