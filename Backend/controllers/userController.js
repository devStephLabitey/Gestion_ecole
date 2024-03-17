const db = require('../config/mysql')
const bcrypt = require('bcrypt')

exports.signup = (req, res)=>{
    console.log(req.body);
    let insertUserQuery = "INSERT INTO users (nom, prenom, email, state, address,  pass_word,  Filiere) VALUES(?,?,?,?,?,?,?)";
    bcrypt
    .hash(req.body.password, 5)
    .then((hash)=>{
        db.query(
            insertUserQuery,
            [req.body.nom, req.body.prenom, req.body.email, req.body.state, req.body.adresse, hash, req.body.filiere],
            (error, result)=>{
                if (error){
                    res.status(401).json(error)
                }
                res.status(201).json({hash, id: result.insertId})
            }
        )
    })
    .catch((error)=>{
        res.status(500).json(error)
    }) 
}


exports.timetable = (req, res)=>{
    console.log(req.body);
    let insertUserQuery = "INSERT INTO timetable (dates, times, nomCours, typeCours, nomProf,  nomSalle) VALUES(?,?,?,?,?,?)";
    
    then(()=>{
        db.query(
            insertUserQuery,
            [req.body.dates, req.body.times, req.body.nomCours, req.body.typeCours, req.body.nomProf, req.body.nomSalle],
           
            (error, result)=>{
                if (error){
                    res.status(401).json(error)
                }
                res.status(201).json({id: result.insertId})
            },
            console.log(req.body.dates, req.body.times, req.body.nomCours, req.body.typeCours, req.body.nomProf, req.body.nomSalle)
        )
    })
    .catch((error)=>{
        res.status(500).json(error)
    }) 
}



exports.login = (req, res) => { 
    console.log(req.body);

    let selectUserQuery = "SELECT * FROM `users` WHERE email=?";
    db.query(selectUserQuery, [req.body.email], (error, result) => {
        if (error) {
            res.status(500).json({ error: "Internal server error ooooo" });
        } else if (result.length > 0) {
            bcrypt.compare(req.body.password, result[0].pass_word)
                .then((valid) => {
                    if (valid) {
                        res.status(200).json({ message: "Login successful", id: result[0].email });
                    } else {
                        res.status(401).json({ error: "Incorrect password" });
                    }
                })
                .catch((error) => {
                    res.status(500).json({ error: "Internal server error" });
                });
        } else {
            res.status(401).json({ error: "User not found" });
        }
    });
}