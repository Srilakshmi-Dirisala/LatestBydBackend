var express = require('express');
const { loginController } = require('../controllers/login.controller');
var router = express.Router();


router.post('/login', loginController);

module.exports = router