const mongoose = require('mongoose');

const carritoCompraBoletoSchema = new mongoose.Schema({
    idCarritoCompra: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CarritoCompra',
    },
    idBoleto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Boleto',
    },
});

module.exports = mongoose.model('CarritoCompraBoleto', carritoCompraBoletoSchema);