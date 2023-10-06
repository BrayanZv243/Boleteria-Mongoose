const mongoose = require('mongoose');

const compraSchema = new mongoose.Schema({
    idPago: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pago',
    },
    idEvento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Evento',
    },
    boletos: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Boleto' }
    ],
});

module.exports = mongoose.model('Compra', compraSchema);