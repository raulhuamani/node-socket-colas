const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');


const ticketControl = new TicketControl();



io.on('connection', (client) => {
    // Escuchamos al cliente, recibe data y callback
    client.on('siguienteTicket', (data, callback) => {

        let siguiente = ticketControl.siguiente();

        console.log(siguiente);
        callback(siguiente); // Se envia el callback con el valor siguiente
    });

    // emitir en un evento 'estadoActual'
    client.emit('estadoActual', {
        actual: ticketControl.getUltimoTicket(),
        ultimos4: ticketControl.getUltimos4()
    });

    client.on('atenderTicket', (data, callback) => {

        if (!data.modulo) {
            return callback({
                err: true,
                mensaje: 'El modulo es necesario'
            });
        }


        let atenderTicket = ticketControl.atenderTicket(data.modulo);


        callback(atenderTicket);

        // actualizar/ notificar cambios en los ULTIMOS 4
        client.broadcast.emit('ultimos4', {
            ultimos4: ticketControl.getUltimos4()
        });


    });

});