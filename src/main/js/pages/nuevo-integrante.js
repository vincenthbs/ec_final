const React = require('react');
const { useState, useEffect } = require('react');
const { Link, useParams } = require('react-router-dom');
const client = require('../client');

const NuevoIntegrantePage = () => {

    let { id } = useParams();

    const [personas, setPersonas] = useState([]);
    const [equipos, setEquipos] = useState([]);
    const [instrumentos, setInstrumentos] = useState([]);

    const [idPersona, setIdPersona] = useState('');
    const [idEquipo, setIdEquipo] = useState('');
    const [idInstrumento, setIdInstrumento] = useState('');

    const handleSubmit = (evento) => {
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/integrantes',
            entity: {
                persona: 'http://localhost:8080/api/personas/' + idPersona,
                equipo: 'http://localhost:8080/api/equipos/' + idEquipo,
                instrumento: 'http://localhost:8080/api/instrumentos/' + idInstrumento
            },
            headers: { 'Content-Type': 'application/json' }
        }).done(() => {
           window.location = '/';
        });
    }

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/personas'
        }).done(response => {
            setPersonas(response.entity._embedded.personas);
        });

        client({
            method: 'GET',
            path: '/api/equipos'
        }).done(response => {
            setEquipos(response.entity._embedded.equipos);
        });

        client({
            method: 'GET',
            path: '/api/instrumentos'
        }).done(response => {
            setInstrumentos(response.entity._embedded.instrumentos);
        });

    },[]);

    return (
        <>
            <h1>Nuevo Integrante</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='persona'>Persona </label>
                <select name="persona" id="persona" onChange={(e) => {setIdPersona(e.target.value)}}>
                    {personas.map(persona => {	
                        const value = persona._links.self.href.split('/').slice(-1);
                        return (
                            <option key={value} value={value}>{persona.nombre}</option>
                        );
                    })}
                </select><br />

                <label htmlFor='equipo'>Equipo </label>
                <select name="equipo" id="equipo" onChange={(e) => {setIdEquipo(e.target.value)}}>
                    {equipos.map(equipo => {	
                        const value = equipo._links.self.href.split('/').slice(-1);
                        return (
                            <option key={value} value={value}>{equipo.nombre}</option>
                        );
                    })}
                </select><br />
                
                <label htmlFor='instrumento'>Instrumento </label>
                <select name="instrumento" id="instrumento" onChange={(e) => {setIdInstrumento(e.target.value)}}>
                    {instrumentos.map(instrumento => {	
                        const value = instrumento._links.self.href.split('/').slice(-1);
                        return (
                            <option key={value} value={value}>{instrumento.nombre}</option>
                        );
                    })}
                </select><br />

                <input type="submit" value="Nuevo Integrante" />

            </form>
            <Link to="/">Volver</Link>
        </>
    );
}

module.exports = NuevoIntegrantePage;