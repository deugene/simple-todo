"use strict";
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
// import routes
const router_1 = require('./router');
const app = express();
mongoose.connect(process.env.MONGODB_URI);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../client')));
// define routes
app.use(router_1.default);
// catch 404 and forward to angular2
app.use((req, res) => {
    console.log(`Redirecting Server 404 request: ${req.originalUrl}`);
    res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});
// error handler
app.use((err, req, res, next) => {
    // only providing error details in development
    err = process.env.NODE_ENV === 'development'
        ? { message: err.message, stack: err.stack }
        : { message: err.message };
    // send error json
    res.json({ err: err });
});
module.exports = app;
