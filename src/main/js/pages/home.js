const React = require('react');
const client = require('../client');
const { Link } = require('react-router-dom');

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { deportes: [], personas: [], equipos: [] };
    }
    componentDidMount() {
        client({ method: 'GET', path: '/api/deportes' }).done(response => {
            this.setState({ deportes: response.entity._embedded.deportes });
        });

        client({ method: 'GET', path: '/api/personas' }).done(response => {
            this.setState({ personas: response.entity._embedded.personas });
        });

        client({ method: 'GET', path: '/api/equipos' }).done(response => {
            this.setState({ equipos: response.entity._embedded.equipos });
        });
    }
    render() {
        return (
            <>
                <h1>EXAMEN FINAL</h1>

                <div style={{ "width": "100%", "display": "flex" }}>
                    <div style={{ "width": "calc(100% / 3)" }}>
                        <Titulo entidad="Deportes" emoji="🏀" />
                        <DeporteList deportes={this.state.deportes} />
                        <Link to="/nuevo-deporte">Nuevo Deporte</Link>
                    </div>
                    <div style={{ "width": "calc(100% / 3)" }}>
                        <Titulo entidad="Personas" emoji="👤" />
                        <PersonaList personas={this.state.personas} />
                        <Link to="/nueva-persona">Nueva Persona</Link>
                    </div>
                    <div style={{ "width": "calc(100% / 3)" }}>
                        <Titulo entidad="Equipos" emoji="🎮" />
                        <EquipoList equipos={this.state.equipos} />
                        <Link to="/nuevo-equipo">Nuevo Equipo</Link>
                    </div>
                </div>
            </>
        )
    }
}

const Titulo = (props) => {
    return (
        <>
            <hr />
            <h2>{props.emoji} - {props.entidad}</h2>
            <hr />
            Lista completa de {props.entidad.toLowerCase()}
        </>
    )
}

class DeporteList extends React.Component {
    render() {
        const deportes = this.props.deportes.map(deporte =>
            <Deporte key={deporte._links.self.href} deporte={deporte} />
        );
        return (
            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                    {deportes}
                </tbody>
            </table>
        )
    }
}

class PersonaList extends React.Component {
    render() {
        const personas = this.props.personas.map(persona =>
            <Persona key={persona._links.self.href} persona={persona} />
        );
        return (
            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                    {personas}
                </tbody>
            </table>
        )
    }
}

class EquipoList extends React.Component {
    render() {
        const equipos = this.props.equipos.map(equipo =>
            <Equipo key={equipo._links.self.href} equipo={equipo} />
        );
        return (
            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                    {equipos}
                </tbody>
            </table>
        )
    }
}

class Deporte extends React.Component {
    render() {
        const id = this.props.deporte._links.self.href.split("/").slice(-1);
        return (
            <tr>
                <td>{this.props.deporte.nombre}</td>
                <td>{this.props.deporte.descripcion}</td>
                <td>
                    <Link to={"/ver-deporte/" + id}>Ver</Link> |
                    <Link to={"/editar-deporte/" + id}>Editar</Link>
                </td>
            </tr>
        )
    }
}

class Persona extends React.Component {
    render() {
        const id = this.props.persona._links.self.href.split("/").slice(-1);
        return (
            <tr>
                <td>{this.props.persona.nombre}</td>
                <td>
                    <Link to={"/ver-persona/" + id}>Ver</Link>
                </td>
            </tr>
        )
    }
}

class Equipo extends React.Component {
    render() {
        const id = this.props.equipo._links.self.href.split("/").slice(-1);
        return (
            <tr>
                <td>{this.props.equipo.nombre}</td>
                <td>
                    <Link to={"/ver-equipo/" + id}>Ver</Link>
                </td>
            </tr>
        )
    }
}

module.exports = HomePage;