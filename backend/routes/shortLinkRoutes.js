const express = require('express');
const { createShortLink, getAnalytics } = require('../controllers/shortLinkController');
const router = express.Router();

router.post('/short-links', createShortLink);

router.get("/analytics/:shortId", getAnalytics);

module.exports = router;