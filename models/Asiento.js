const mongoose = require('mongoose');

const asientoSchema = new mongoose.Schema({
    tipo: String,
    filaYNumero: String,
});

module.exports = mongoose.model('Asiento', asientoSchema);