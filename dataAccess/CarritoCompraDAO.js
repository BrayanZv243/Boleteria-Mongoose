const CarritoCompra = require('../models/CarritoCompra');

class CarritoCompraDAO {

    static async crearCarritoCompra(carritoCompraData) {
        try {
            const carritoCompra = new CarritoCompra(carritoCompraData);
            return await carritoCompra.save();
        } catch (error) {
            throw error;
        }
    }

    static async obtenerCarritoCompraPorId(id) {
        try {
            return await CarritoCompra.findById(id);
        } catch (error) {
            throw error;
        }
    }

    static async obtenerCarritoCompraPorIdUsuario(idUsuario){
        try {
            return await CarritoCompra.findOne().where('idUsuario').equals(idUsuario);
        } catch (error) {
            throw error;
        }
    }

    static async actualizarCarritoCompra(id, carritoCompraData) {
        try {
            return await CarritoCompra.findByIdAndUpdate(id, carritoCompraData, { new: true });
        } catch (error) {
            throw error;
        }
    }

    static async obtenerCarritoCompras() {
        try {
            return await CarritoCompra.find();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CarritoCompraDAO;