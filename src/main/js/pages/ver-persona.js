const React = require('react');
const { Link, useParams } = require('react-router-dom');
const { useState, useEffect } = require('react');
const client = require('../client');

const VerPersonaPage = () => {

    let { id } = useParams();
    const [persona, setPersona] = useState({});

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/personas/' + id 
        }).then(response => setPersona(response.entity))
    }, [id])

    return (
        <>
            <h1>Ver Persona</h1>

            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{persona.nombre}</td>
                </tr>
            </table>

            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = VerPersonaPage;
