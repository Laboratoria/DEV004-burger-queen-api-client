import { routes } from './routes.js';
export const onNavigate = (pathName) => {
  // modificando la ruta en el navegador
  window.history.pushState(
    {},
    pathName,
    window.location.origin + pathName,
  );
  // llamando a la maqueta por su ruta
  routes[pathName]();
  // llamamos al archivo de Eventos segun ruta de pantalla
  /* if (pathName === '/') {
    loginEventos(onNavigate);
  }
  if (pathName === '/registro') {
    registroEventos(onNavigate);
  }
  if (pathName === '/timeline') {
    timelineEventos(onNavigate);
  }
  if (pathName === '/crear-publicacion') {
    crearPublicacionEventos(onNavigate);
  } */
};