const React = require('react');
const { Link, useParams } = require('react-router-dom');
const { useState, useEffect } = require('react');
const client = require('../client');

const VerDeportePage = () => {

    let { id } = useParams();
    const [deporte, setDeporte] = useState({});

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/deportes/' + id
        }).done(response => setDeporte(response.entity));
    }, [id])

    return (
        <>
            <h1>Ver Deporte</h1>

            <table>
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{deporte.nombre}</td>
                    </tr>
                    <tr>
                        <th>Categoría</th>
                        <td>{deporte.categoria}</td>
                    </tr>
                </tbody>
            </table>

            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = VerDeportePage;