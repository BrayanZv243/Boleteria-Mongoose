const db = require('./config/db');
const UsuarioDAO = require('./dataAccess/usuarioDAO');

db.conectar()
    .then(async () => {
        try {
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