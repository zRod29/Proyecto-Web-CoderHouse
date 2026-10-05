/*
if = si
else if = PERO SI NO
else = de lo contrario

=== Igualdad estricta
!== Desigualdad estricta:
4>1  Mayor que
1<2 = menor que
>= y <= Mayor/menor o igual
OR (||) - "Al menos uno debe servir"
ND (&&) - "Todo debe ser verdad"
NOT (!) - "El gran inversor"
*/                 

const formContacto = document.getElementById('formularioProyecto2');












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


