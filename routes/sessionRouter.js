const { Router } = require('express')
const { logInUsuario, registrarNuevoUsuario, logOutUsuario } = require('../controllers/sessionController')
const router = Router()

router.post('/login', logInUsuario)
router.post('/register', registrarNuevoUsuario)
router.get('/logout', logOutUsuario)

module.exports = router
