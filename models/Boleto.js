const mongoose = require('mongoose');

const boletoSchema = new mongoose.Schema({
    idEvento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Evento',
    },
    idAsiento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Asiento',
    },
    precio: Number,
    estado: String,
});

module.exports = mongoose.model('Boleto', boletoSchema);