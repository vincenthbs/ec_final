const React = require('react');
const { useState, useEffect } = require('react');
const { Link, useParams } = require('react-router-dom');
const client = require('../client');

const EditarDeportePage = () => {

    const [deporte, setDeporte] = useState({});
    let { id } = useParams();

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/deportes/' + id
        }).done(response => setDeporte(response.entity));
    }, [])

    const handleSubmit = (evento) => {
        evento.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/deportes/' + id,
            entity: deporte,
            headers: { 'Content-Type': 'application/json' }
        }).done(() => window.location = '/');
    }

    return (
        <>
            <h1>Editar Deporte</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" id="nombre" name="nombre" value={deporte.nombre} onChange={(e) => setDeporte({ ...deporte, nombre: e.target.value })} /> <br/>
                <label>Categoría</label>
                <input type="text" id="categoria" name="categoria" value={deporte.categoria} onChange={(e) => setDeporte({ ...deporte, categoria: e.target.value })} /> <br/>                
                <input type="submit" value="Editar Deporte" />
            </form>
        </>
    )
}

module.exports = EditarDeportePage;