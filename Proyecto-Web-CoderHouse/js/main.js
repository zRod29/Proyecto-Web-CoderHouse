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

const formulario = document.getElementById("formularioProyecto2");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    let continuar = true;

    while (continuar) {

        let servicio = document.getElementById("servicio2").value;
        let ancho = parseFloat(document.getElementById("ancho").value);
        let alto = parseFloat(document.getElementById("alto").value);

        if (servicio === "") {
            alert("Por favor, seleccioná un tipo de trabajo.");
            continuar = false;

        } else if (isNaN(ancho) || isNaN(alto)) {
            alert("Por favor, ingresá medidas válidas.");
            continuar = false;

        } else {

            let metrosCuadrados = ancho * alto;
            let precioPorMetro = 0;

            if (servicio === "rejas") {
                precioPorMetro = 50000;

            } else if (servicio === "portones") {
                precioPorMetro = 80000;

            } else if (servicio === "barandas") {
                precioPorMetro = 60000;

            } else if (servicio === "escaleras") {
                precioPorMetro = 90000;

            } else if (servicio === "estructuras") {
                precioPorMetro = 70000;
            }

            let presupuesto = metrosCuadrados * precioPorMetro;

            alert(
                "Presupuesto estimado\n\n" +
                "Trabajo: " + servicio + "\n" +
                "Superficie: " + metrosCuadrados + " m²\n" +
                "Precio estimado: $" + presupuesto
            );

            continuar = false;
        }
    }
});

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


