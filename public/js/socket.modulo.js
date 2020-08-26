// commando para establecer la conexion
var socket = io();


var searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('modulo')) {
    window.location = 'index.html';
    throw new Error('El modulo es necesario');
}

var modulo = searchParams.get('modulo');
var label = $('small');

console.log(modulo);
$('h1').text('Modulo ' + modulo);


// Evento listener del boton
$('button').on('click', function() {

    socket.emit('atenderTicket', { modulo: modulo }, function(resp) {

        if (resp === 'No hay tickets') {
            label.text(resp);
            alert(resp);
            return;
        }

        label.text('Ticket ' + resp.numero);

    });

});