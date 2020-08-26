// commando para establecer la conexion
var socket = io();
// Recomendacion Jquery: Si se va utilizar muchas veces lblNuevoTicket declarar una variable
var label = $('#lblNuevoTicket');


socket.on('connect', function() {
    console.log("Conectado al servidor");
});

socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});

// on 'estadoActual'
socket.on('estadoActual', function(resp) {

    console.log(resp);
    label.text(resp.actual)

});

// Todos los botones al hacer click en esta pagina disparan la function()
$('button').on('click', function() {
    // Se envia null pero se recibe en callback siguienteTicket
    socket.emit('siguienteTicket', null, function(siguienteTicket) {

        label.text(siguienteTicket);

    });
})