import openDatabase from './database';

// Función para insertar un usuario en la tabla 'usuarios'
const insertUsuario = async (cedula, nombre, apellido, clave, correo, telefono) => {
    try {
        // Abre la base de datos
        const db = await openDatabase();

        // Realiza una transacción para la inserción
        await db.transaction(tx => {
            tx.executeSql(
                `INSERT INTO usuarios (cedula, nombre, apellido, clave, correo, telefono) VALUES (?, ?, ?, ?, ?, ?)`,
                [cedula, nombre, apellido, clave, correo, telefono],
                (tx, results) => {
                    // Verifica el número de filas afectadas
                    if (results.rowsAffected > 0) {
                        console.log('Usuario insertado correctamente');
                    } else {
                        console.error('Error al insertar usuario: No se insertaron filas');
                    }
                },
                error => {
                    console.error('Error al insertar usuario:', error);
                }
            );
        });
    } catch (error) {
        console.error('Error al abrir la base de datos para insertar usuario:', error);
    }
};

// Exportar la función para usarla en otros archivos
export default insertUsuario;
