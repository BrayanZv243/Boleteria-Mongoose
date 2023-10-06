const mongoose = require('mongoose');

const carritoCompraSchema = new mongoose.Schema({
    idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
    },
    boletos: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Boleto' 
    }],
    total: Number,
});

module.exports = mongoose.model('CarritoCompra', carritoCompraSchema);