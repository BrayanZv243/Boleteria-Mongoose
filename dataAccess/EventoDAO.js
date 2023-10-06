const Evento = require('../models/Evento');

class EventoDAO {

    static async crearEvento(eventoData) {
        try {
            const evento = new Evento(eventoData);
            return await evento.save();
        } catch (error) {
            throw error;
        }
    }

    static async obtenerEventoPorId(id) {
        try {
            return await Evento.findById(id);
        } catch (error) {
            throw error;
        }
    }

    static async actualizarEvento(id, eventoData) {
        try {
            return await Evento.findByIdAndUpdate(id, eventoData, { new: true });
        } catch (error) {
            throw error;
        }
    }

    static async eliminarEvento(id) {
        try {
            return await Evento.findByIdAndRemove(id);
        } catch (error) {
            throw error;
        }
    }

    static async obtenerEventos() {
        try {
            return await Evento.find();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = EventoDAO;