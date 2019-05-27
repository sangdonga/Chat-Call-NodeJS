const express = require('express');
var router = express.Router();

var direct = require('../controllers/users.controller');
var connect = require('../controllers/connectDB.controller');
var LoggedInBack = require("../middlewares/auth.middle").LoggedIn;

router.get('/', LoggedInBack ,direct.signup);
router.post('/', LoggedInBack, connect.checkEmail, connect.addUser);

module.exports = router;