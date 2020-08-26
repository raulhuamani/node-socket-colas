// commando para establecer la conexion
var socket = io();

var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblModulo1 = $('#lblModulo1');
var lblModulo2 = $('#lblModulo2');
var lblModulo3 = $('#lblModulo3');
var lblModulo4 = $('#lblModulo4');


var lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
var lblModulos = [lblModulo1, lblModulo2, lblModulo3, lblModulo4];

socket.on('estadoActual', function(data) {

    // console.log(data);
    actualizaHTML(data.ultimos4)

});

socket.on('ultimos4', function(data) {
    // console.log(data);

    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();

    actualizaHTML(data.ultimos4)
});

function actualizaHTML(ultimos4) {

    for (var i = 0; i <= ultimos4.length - 1; i++) {

        lblTickets[i].text('Ticket ' + ultimos4[i].numero);
        lblModulos[i].text('Modulo ' + ultimos4[i].modulo);

    }

}