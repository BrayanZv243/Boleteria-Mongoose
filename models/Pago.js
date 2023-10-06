const mongoose = require('mongoose');

const pagoSchema = new mongoose.Schema({
    idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
    },
    monto: Number,
    metodo: String,
    fecha: Date,
});

module.exports = mongoose.model('Pago', pagoSchema);