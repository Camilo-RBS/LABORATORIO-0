const express = require('express');
const router = express.Router();
const formController = require('../controllers/Controller');


router.get('/', formController.homePage);

router.get('/form', formController.showForm);

router.post('/submit', formController.submitForm);

router.get('/confirm', formController.confirmationPage);

module.exports = router;
