const React = require('react');
const { useState } = require('react');
const { Link } = require('react-router-dom');
const client = require('../client');

const NuevoPersonaPage = () => {

    const [nombre, setNombre] = useState('');

    const handleSubmit = evento => {
        evento.preventDefault();
        const nuevaPersona = { nombre: nombre };
        client({
            method: 'POST',
            path: '/api/personas', 
            entity: nuevaPersona,
            headers: { 'Content-Type': 'application/json' }
        }).done(() => {
            window.location = '/';
        });
    }

    return (
        <>
            <h1>Nueva Persona</h1>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label> <br />
                <input type="text" id='nombre' name='nombre' onChange={e => setNombre(e.target.value)} /> <br />
                <input type="submit" value="Nueva Persona" />
            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoPersonaPage;