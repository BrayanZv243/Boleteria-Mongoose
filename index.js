const db = require('./config/db');
const UsuarioDAO = require('./dataAccess/usuarioDAO');
const PagoDAO = require('./dataAccess/pagoDAO');
const EventoDAO = require('./dataAccess/EventoDAO');
const AsientoDAO = require('./dataAccess/AsientoDAO');
const BoletoDAO = require('./dataAccess/BoletoDAO');
const CarritoCompra = require('./models/CarritoCompra');
const CarritoCompraDAO = require('./dataAccess/CarritoCompraDAO');
const CompraDAO = require('./dataAccess/CompraDAO');

db.conectar()
    .then(async () => {
        try {
            /*
            const nuevoUsuario = {
                nombre: 'Brayan',
                apellido: 'Zavala',
                tipoUsuario: 'NORMAL',
                edad: 20,
                telefono: '6441596164',
                correo: 'zavala_243@hotmail.com',
                contraseña: '123asd',
            }

            await UsuarioDAO.crearUsuario(nuevoUsuario);
            console.log('Usuario creado');
            
            console.log('Obtenemos los usuarios: ')

            const usuario = await UsuarioDAO.obtenerUsuarios();
            console.log(usuario);
            
            console.log('Creamos un pago de un usuario');

            const nuevoPago = {
                idUsuario: usuario[0]._id,
                monto: 150,
                metodo: 'PayPal',
                fecha: new Date()
            }
            const pago = await PagoDAO.crearPago(nuevoPago);
            console.log('Pago creado con éxito.');
            console.log('Obtenemos los pagos: ');
            const pagos = await PagoDAO.obtenerPagos();
            console.log(pagos);
            

            const nuevoEvento = {
                nombre: 'Carreras',
                lugar: 'ITSON',
                tipo: 'Deportes',
                fecha: new Date(),
                numBoletosVendidos: 50,
                numBoletosDisponibles: 200,
            }

            const evento = await EventoDAO.crearEvento(nuevoEvento);
            console.log('Evento creado con éxito')
            
            */
            /*
            console.log('Obtenemos los eventos')
            const eventos = await EventoDAO.obtenerEventos();
            console.log(eventos)
            
            
            console.log('Creamos 10 asientos')
            for (let i = 0; i < 10; i++) {
                const letraAleatoria = String.fromCharCode(65 + Math.floor(Math.random() * 26));

                const nuevoAsiento = {
                    tipo: Math.floor(Math.random() * 2) + 1 === 1 ? 'VIP' : 'Normal',
                    filaYNumero: `${letraAleatoria}${i}`
                }
                
                const asiento = await AsientoDAO.crearAsiento(nuevoAsiento);
                console.log(`Asiento ${nuevoAsiento.filaYNumero} creado`)
            }
            
            
            const asientos = await AsientoDAO.obtenerAsientos();
            console.log('Creamos 3 boletos')
            for (let i = 0; i < 3; i++) {
                const nuevoBoleto = {
                    idEvento: eventos[0]._id,
                    idAsiento: asientos[0]._id,
                    precio: Math.floor(Math.random() * 1001),
                    estado: Math.floor(Math.random() * 2) + 1 === 1 ? 'Disponible' : 'Ocupado'
                }
                await BoletoDAO.crearBoleto(nuevoBoleto);
                console.log('Boleto creado con éxito')
            }
            */

            /*
            console.log('Obtenemos los boletos')
            const boletos = await BoletoDAO.obtenerBoletos();
            console.log(boletos)
            const usuarios = await UsuarioDAO.obtenerUsuarios();
            
            const nuevoCarritoCompra = {
                idUsuario: usuarios[0]._id,
                boletos: [],
                total: 0
            }
            const carritoCompra = await CarritoCompraDAO.crearCarritoCompra(nuevoCarritoCompra);
            console.log('Carrito Compra creado con éxito al usuario.')
            */
            
            /*
            console.log('Insertamos boletos al carrito compra del usuario')
            // Obtenemos el carrito compra del usuario
            const carritoCompraUsuario = await CarritoCompraDAO.obtenerCarritoCompraPorIdUsuario(usuarios[0]._id);

            // Actualizamos el carrito compra añadiendole 2 boletos
            carritoCompraUsuario.boletos.push(boletos[0])
            carritoCompraUsuario.boletos.push(boletos[1])

            // Actualizamos el total
            for (let i = 0; i < carritoCompraUsuario.boletos.length; i++) {
                carritoCompraUsuario.total += carritoCompraUsuario.boletos[i].precio
            }
            await CarritoCompraDAO.actualizarCarritoCompra(carritoCompraUsuario._id, carritoCompraUsuario)
            console.log('Se actualizó correctamente el carrito de compra')
            */
            const pagos2 = await PagoDAO.obtenerPagos();
            const eventos2 = await EventoDAO.obtenerEventos();
            const boletos2 = await BoletoDAO.obtenerBoletos();

            // Creamos una compra
            const nuevaCompra = {
                idPago: pagos2[0]._id,
                idEvento: eventos2[0]._id,
                boletos: boletos2
            }

            await CompraDAO.crearCompra(nuevaCompra)
            console.log('Se creó correctamente la compra')
            const compras = await CompraDAO.obtenerCompras();
            console.log(compras)
        } catch (error) {
            console.error('Error al realizar pruebas: ', error)
        } finally {
            db.desconectar();
            process.exit(0);
        }
    })
    .catch(err => {
        console.error('Error al conectarse a la BD: ', err);
    })