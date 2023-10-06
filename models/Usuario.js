const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    tipoUsuario: String,
    edad: Number,
    telefono: String,
    correo: String,
    contraseña: String,
});

module.exports = mongoose.model('Usuario', usuarioSchema);