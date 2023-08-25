const React = require('react');
const ReactDOM = require('react-dom');
const { createBrowserRouter, RouterProvider } = require('react-router-dom');

const HomePage = require('./pages/home');
const NuevoPersonaPage = require('./pages/nuevo-persona'); 
const VerDeportePage = require('./pages/ver-deporte'); 
const NuevoDeportePage = require('./pages/nuevo-deporte'); 
const VerPersonaPage = require('./pages/ver-persona'); 
const EditarDeportePage = require('./pages/editar-deporte'); 
const VerEquipoPage = require('./pages/ver-equipo');
const NuevoIntegrantePage = require('./pages/nuevo-integrante');

const routes = [
    { path: '/', element: <HomePage /> },
    { path: '/ver-deporte/:id', element: <VerDeportePage /> },
    { path: '/nuevo-deporte', element: <NuevoDeportePage /> },
    { path: '/ver-persona/:id', element: <VerPersonaPage /> },
    { path: '/nuevo-persona', element: <NuevoPersonaPage /> },
    { path: '/editar-deporte/:id', element: <EditarDeportePage /> },
    { path: '/ver-equipo/:id', element: <VerEquipoPage /> },
    { path: '/ver-equipo/:id/nuevo-integrante', element: <NuevoIntegrantePage /> },
];

const router = createBrowserRouter(routes);

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById('react')
);
