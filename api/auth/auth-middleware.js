const express = require('express')

const router = express.Router();

async function protect(req, res, next) {
 if (req.session.user ) {
    next()
 } else {
    next({ status: 401, message: 'you shall not pass'})
 }
}




module.exports = {
    protect
}