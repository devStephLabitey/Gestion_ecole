const userCtrl= require('../controllers/userController');
const express = require("express")
const router = express.Router()



router.post("/inscription", userCtrl.signup),
router.post("/connexion", userCtrl.login)
// router.post("/connexion", userCtrl.login)

module.exports = router;