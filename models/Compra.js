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
    total: Number,
});

module.exports = mongoose.model('Compra', compraSchema);