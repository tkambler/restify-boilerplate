'use strict';
/* global APPDIR */

const path = require('path');

Object.defineProperties(global, {
    'APP_DIR': {
        'value': path.resolve(__dirname, '..')
    }
});

require('app/config')(path.resolve(APP_DIR, 'config'))
    .then((config) => {
        require('app/api')();
    })
    .then((server) => {
        console.log('Server is ready.');
    });
