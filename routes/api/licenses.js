const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const License = require('../../models/License')

router.get('/', (req, res) => {
  License.find()
    .then(license => res.json(license))
    .catch(err => res.status(404).json({ noLicense: 'There are no licenses stored in the database.' }))
});




module.exports = router;

