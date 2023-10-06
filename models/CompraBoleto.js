const mongoose = require('mongoose');

const compraBoletoSchema = new mongoose.Schema({
    idCompra: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Compra',
    },
    idBoleto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Boleto',
    },
});
module.exports = mongoose.model('Compra', compraBoletoSchema);