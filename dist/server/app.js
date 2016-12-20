"use strict";
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// import routes
const router_1 = require('./router');
const app = express();
mongoose.connect(app.get('env') === 'development'
    ? 'mongodb://localhost/ng2expressTodo'
    : process.env.MONGODB_URI);
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
    err = req.app.get('env') === 'development'
        ? err
        : { message: 'Internal Server Error' };
    // send error
    res.json({ err: err.message });
});
module.exports = app;
//# sourceMappingURL=app.js.map