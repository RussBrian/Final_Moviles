import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const databaseName = 'finalAmadis.db'; // Nombre de la base de datos

// Función para abrir la base de datos
export const openDatabase = async () => {
    try {
        // Abre la base de datos
        const db = await SQLite.openDatabase({
            name: databaseName,
            location: 'default',
        });
        console.log('Base de datos abierta');
        return db;
    } catch (error) {
        console.error('Error al abrir la base de datos:', error);
        throw error;
    }
};

// Función para crear tablas
export const createTables = async (db) => {
    try {
        // Transacción para crear tablas si no existen
        await db.transaction(tx => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS usuarios (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nombre TEXT NOT NULL,
                    correo TEXT NOT NULL,
                    clave TEXT NOT NULL
                )`
            );
            console.log('Tabla usuarios creada o ya existente');
        });
    } catch (error) {
        console.error('Error al crear las tablas:', error);
        throw error;
    }
};

// Función para inicializar la base de datos
export const initializeDatabase = async () => {
    try {
        const db = await openDatabase();
        await createTables(db);
        return db;
    } catch (error) {
        console.error('Error al inicializar la base de datos:', error);
        throw error;
    }
};

// Exportar la función de inicialización para usarla en otros archivos
// export default initializeDatabase;