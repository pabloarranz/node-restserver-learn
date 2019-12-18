// ===============================
// Puerto
// ===============================
process.env.PORT = process.env.PORT || 3000;

// ===============================
// Entorno
// ===============================
process.env.NODE_ENV =  process.env.NODE_ENV || 'dev1';


// ===============================
// Base de datos
// ===============================
let urlDB;

process.env.MONGO_URI = 'mongodb+srv://cafe-user:cafe123456@clusterstarter0-pq2ea.azure.mongodb.net/cafe'
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;