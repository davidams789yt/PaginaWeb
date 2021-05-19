const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.html', { title: 'RuchLand' });
});

router.get('/contact', (req, res) => {
  res.render('contact.html', { title: 'RuchLand' });
});

router.get('/shop', (req, res) => {
  res.render('shop.html', { title: 'RuchLand' });
});

module.exports = router;