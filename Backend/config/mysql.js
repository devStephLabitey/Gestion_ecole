const mysql2 = require('mysql2')

const db = mysql2.createConnection({
    host: "localhost",
    user:"root",
    password :"",
    database: "gestionecole",   
})

db.connect((error)=>{
    if(error) throw error;
    console.log('connexion réussie');
});
module.exports = db;

