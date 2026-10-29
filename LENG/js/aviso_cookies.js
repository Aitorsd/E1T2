const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

window.dataLayer = window.dataLayer || [];

// 1. Comprobar si el usuario YA aceptó las cookies previamente
if (!localStorage.getItem('cookies-aceptadas')) {
    // Si NO las ha aceptado, mostramos el aviso
    avisoCookies.classList.add('activo');
    fondoAvisoCookies.classList.add('activo');
}

// 2. Evento para cuando se hace clic en el botón
botonAceptarCookies.addEventListener('click', () => {
    // Ocultar el aviso
    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');

    // Guardar en la memoria del navegador que ya se aceptaron
    localStorage.setItem('cookies-aceptadas', 'true');

    // Registrar el evento en el dataLayer
    window.dataLayer.push({'event': 'cookies-aceptadas'});
});