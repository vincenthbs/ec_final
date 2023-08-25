const React = require('react');
const { useState } = require('react');
const { Link } = require('react-router-dom');
const client = require('../client');

const NuevoDeportePage = () => {

    const [nombre, setNombre] = useState('');
    const [categoria, setCategoria] = useState('');

    const handleSubmit = (evento) => {
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/deportes',
            entity: { nombre: nombre, categoria: categoria }, 
            headers: { 'Content-Type': 'application/json' }
        }).done(() => {
            window.location = '/';
        });
    }

    return (
        <>
            <h1>Nuevo Deporte</h1>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label> <br />
                <input type="text" id='nombre' name='nombre' onChange={e => setNombre(e.target.value)} /> <br />
                <label>Categoría</label> <br />
                <input type="text" id='categoria' name='categoria' onChange={e => setCategoria(e.target.value)} /> <br />
                <input type="submit" value="Nuevo Deporte" />
            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoDeportePage;