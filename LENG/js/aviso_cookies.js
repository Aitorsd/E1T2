const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const botonRechazarCookies = document.getElementById('btn-rechazar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

window.dataLayer = window.dataLayer || [];

// 1. Comprobar si el usuario YA aceptó las cookies previamente
if (!localStorage.getItem('cookies-aceptadas')) {

    avisoCookies.classList.add('activo');
    fondoAvisoCookies.classList.add('activo');
}


botonAceptarCookies.addEventListener('click', () => {
    // Ocultar el aviso
    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');

    // Guardar en la memoria del navegador que ya se aceptaron
    localStorage.setItem('cookies-aceptadas', 'true');

    window.dataLayer.push({'event': 'cookies-aceptadas'});
});
// 1. Comprobar si el usuario ya denego las cookies previamente
botonRechazarCookies.addEventListener('click', () => {
    // Ocultar el aviso
    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');

    // Guardar en la memoria del navegador que ya se rechazaron
    localStorage.setItem('cookies-aceptadas', 'true');

    // Registrar el evento en el dataLayer
    window.dataLayer.push({'event': 'cookies-aceptadas'});
});