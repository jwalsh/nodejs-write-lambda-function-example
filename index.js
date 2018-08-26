console.log('AWS SDK');

const AWS=require('aws-sdk');

const fs = require('fs');

const credentials = require('./credentials.json');
console.log(credentials);

AWS.config.loadFromPath('./credentials.json');
const lambda = new AWS.lambda();

const params = {

};
