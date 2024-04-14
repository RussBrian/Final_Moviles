import { openDatabase } from './database';

console.log('insert.js se está ejecutando')

// Función para insertar un usuario en la tabla 'usuarios'
const insertUsuario = async (nombre, correo, clave) => {
    try {
        const db = await openDatabase();
        await db.transaction(tx => {
            tx.executeSql(
                `INSERT INTO usuarios (nombre, correo, clave) VALUES (?, ?, ?)`,
                [nombre, correo, clave],
                (tx, results) => {
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

console.log('La función insertUsuario está definida:', insertUsuario);
// Exportar la función para usarla en otros archivos
export default insertUsuario;