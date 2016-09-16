'use strict';

const Promise = require('bluebird');
const restify = require('restify');
const config = require('app/config');
const server = Promise.promisifyAll(restify.createServer());
const meddleware = require('restify-meddleware');
const enrouten = require('restify-enrouten');

meddleware(server, config.get('meddleware'));
enrouten(server, config.get('routes'));

module.exports = () => {
    return server.listenAsync(config.get('api:port'))
        .return(server);
};
