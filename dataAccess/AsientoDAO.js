const Asiento = require('../models/Asiento');

class AsientoDAO {

    static async crearAsiento(asientoData) {
        try {
            const asiento = new Asiento(asientoData);
            return await asiento.save();
        } catch (error) {
            throw error;
        }
    }

    static async obtenerAsientoPorId(id) {
        try {
            return await Asiento.findById(id);
        } catch (error) {
            throw error;
        }
    }

    static async actualizarAsiento(id, asientoData) {
        try {
            return await Asiento.findByIdAndUpdate(id, asientoData, { new: true });
        } catch (error) {
            throw error;
        }
    }

    static async eliminarAsiento(id) {
        try {
            return await Asiento.findByIdAndRemove(id);
        } catch (error) {
            throw error;
        }
    }

    static async obtenerAsientos() {
        try {
            return await Asiento.find();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AsientoDAO;