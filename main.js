const process = require('process');
const version = process.env.VERS;

if (version === '1') {
    require('./Presences/main.js');
} else if (version === '2') {
    require('./Presences/borderlands2.js');
}