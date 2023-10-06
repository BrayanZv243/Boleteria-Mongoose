const Compra = require('../models/Compra');

class CompraDAO {

    static async crearCompra(compraData) {
        try {
            const compra = new Compra(compraData);
            return await compra.save();
        } catch (error) {
            throw error;
        }
    }

    static async obtenerCompraPorId(id) {
        try {
            return await Compra.findById(id);
        } catch (error) {
            throw error;
        }
    }

    static async obtenerCompras() {
        try {
            return await Compra.find()
                                .populate('idPago')
                                .populate('idEvento')
                                .populate('boletos');
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CompraDAO;