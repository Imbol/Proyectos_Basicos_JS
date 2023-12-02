let botonElem = document.getElementById('boton-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

function generarRandom(min, max){
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita(){
    let indice = generarRandom(0, citas.length);
    citaElem.textContent = `"${citas[indice].texto}"`;
    autorElem.textContent = citas[indice].autor;
}

cambiarCita();

botonElem.addEventListener('click', cambiarCita);