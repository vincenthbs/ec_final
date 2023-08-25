const React = require('react');
const { Link, useParams } = require('react-router-dom');
const { useState, useEffect } = require('react');
const client = require('../client');

const VerEquipoPage = () => {

    let { id } = useParams();
    const [equipo, setEquipo] = useState({});
    const [integrantes, setIntegrantes] = useState([]);

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/equipos/' + id
        }).done(response => setEquipo(response.entity));
        client({
            method: 'GET',
            path: '/api/equipos/' + id + '/integrantes' 
        }).done(response => setIntegrantes(response.entity._embedded.integrantes));
    }, [id])

    return (
        <>
            <h1>Ver Equipo</h1>
            <hr />

            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{equipo.nombre}</td>
                    </tr>
                </tbody>
            </table>
            <hr />

            <h2>Formación</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Persona</th>
                        <th>Deporte</th>
                        <th>Instrumento</th>
                    </tr>
                </thead>
                <tbody>

                    {integrantes.map(integrante => {
                        return (
                            <tr key={integrante.ID}>
                                <td>{integrante.persona.nombre}</td>
                                <td>{integrante.deporte.nombre}</td>
                                <td>{integrante.instrumento.nombre}</td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>

            <hr />
            <Link to={`/ver-equipo/${id}/nuevo-integrante`}>Nuevo Integrante</Link> |
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = VerEquipoPage;