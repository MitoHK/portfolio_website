var express = require('express');
var router = express.Router();

const register = (req, res) => {
  res.render('registro')
}

router.get('/', register);

module.exports = router;
