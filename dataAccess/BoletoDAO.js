const Boleto = require('../models/Boleto');

class BoletoDAO {

    static async crearBoleto(boletoData) {
        try {
            const boleto = new Boleto(boletoData);
            return await boleto.save();
        } catch (error) {
            throw error;
        }
    }

    static async obtenerBoletoPorId(id) {
        try {
            return await Boleto.findById(id);
        } catch (error) {
            throw error;
        }
    }

    static async actualizarBoleto(id, boletoData) {
        try {
            return await Boleto.findByIdAndUpdate(id, boletoData, { new: true });
        } catch (error) {
            throw error;
        }
    }

    static async eliminarBoleto(id) {
        try {
            return await Boleto.findByIdAndRemove(id);
        } catch (error) {
            throw error;
        }
    }

    static async obtenerBoletos() {
        try {
            return await Boleto.find()
                                .populate('idEvento')
                                .populate('idAsiento');
        } catch (error) {
            throw error;
        }
    }
}

module.exports = BoletoDAO;