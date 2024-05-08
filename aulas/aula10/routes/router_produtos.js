const express = require('express');

const controllerProdutos = require('../controlles/controller_produtos');

const router = express.Router();

router.post('/', controllerProdutos.validarDados, controllerProdutos.criar);

module.exports = router;