'use strict';

const _ = require('lodash');
const restify = require('restify');

module.exports = (req, res, next) => {
    console.log(_.keys(req));
    console.log(restify);
    console.log(_.keys(res));
    return res.send('v1 pong');
};
