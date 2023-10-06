const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({
    nombre: String,
    lugar: String,
    tipo: String,
    fecha: Date,
    numBoletosVendidos: Number,
    numBoletosDisponibles: Number,
});

module.exports = mongoose.model('Evento', eventoSchema);