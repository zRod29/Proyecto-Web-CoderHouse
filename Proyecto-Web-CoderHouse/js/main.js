
let nombre = prompt("Ingrese su nombre");
const edad = parseInt(prompt("Ingrese su edad"));
let curso = prompt("Ingrese el curso que esta haciendo");

console.log("Hola, me llamo " + nombre + " y tengo " + edad + " años.");
console.log("Curso: " + curso);

let numeroA = parseInt(prompt("Ingrese un número"));
let numeroB = parseInt(prompt("Ingrese un número"));

console.log("Resultado de Operación Aritmica: " + (numeroA * numeroB));

alert("El resultado de la multiplicación es: " + (numeroA * numeroB));

console.log("La suma es: " + (numeroA + 10));
console.log("La resta es: " + (numeroB - 5));

const formProyecto = document.getElementById('formularioProyecto');

formProyecto.addEventListener('submit', function(evento) {
    evento.preventDefault();
    
    const nombreCompleto = document.getElementById('nombre').value;
    const telefonoCliente = document.getElementById('telefono').value;
    const tipoServicio = document.getElementById('servicio').value;
    const medidas = document.getElementById('medidas').value || "No especificadas";
    const descripcion = document.getElementById('descripcion').value || "Sin descripción";
    
    const tuNumeroWhatsApp = "5493772564776"; 

    const textoMensaje = `¡Hola! Me interesa un presupuesto:\n\n` +
                        `*Nombre:* ${nombreCompleto}\n` +
                        `*Teléfono:* ${telefonoCliente}\n` +
                        `*Trabajo:* ${tipoServicio}\n` +
                        `*Medidas:* ${medidas}\n` +
                        `*Descripción:* ${descripcion}`;
    
    const mensajeCodificado = encodeURIComponent(textoMensaje);
    
    const urlWhatsApp = `https://wa.me/${tuNumeroWhatsApp}?text=${mensajeCodificado}`;
    
    window.open(urlWhatsApp, '_blank');
});


