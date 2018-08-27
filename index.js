console.log('AWS SDK');

const AWS=require('aws-sdk');

const fs = require('fs');

const credentials = require('./credentials.json');
console.log('credentials', credentials);

AWS.config.loadFromPath('./credentials.json');

// console.log(AWS);

console.log('environment', AWS.util.environment);
AWS.util.engine();
AWS.util.userAgent();
AWS.util.isBrowser();
AWS.util.isNode();
AWS.util.uriEscape();
AWS.util.uriEscapePath('');
AWS.util.urlParse('');
AWS.util.urlFormat('');
AWS.util.queryStringParse();
AWS.util.queryParamsToString('');
AWS.util.readFileSync('./credentials.json');
// AWS.util.base64();
// AWS.util.buffer();
AWS.util.string.byteLength();
AWS.util.string.upperFirst('abc');
AWS.util.string.lowerFirst('abc');
// AWS.util.ini.parse();
AWS.util.fn.noop();
AWS.util.fn.makeAsync();
AWS.util.date.getDate();
AWS.util.date.iso8601();
AWS.util.date.rfc822();
AWS.util.date.unixTimestamp();
AWS.util.date.from();
// AWS.util.date.format('2000-01-01', '%Y');
AWS.util.date.parseTimestamp('0');
// console.log(AWS.util.crypto.crc32Table);
AWS.util.crypto.crc32('abc', 'abc');
AWS.util.crypto.hmac('abc', 'abc');
AWS.util.crypto.md5('abc');
AWS.util.crypto.sha256('abc');
// AWS.util.crypto.hash('abc');
AWS.util.crypto.toHex('abc');
// AWS.util.crypto.createHash('abc');
console.log(AWS.util.crypto.lib);
// console.log(AWS.util.abort);
AWS.util.each();
AWS.util.arrayEach();
AWS.util.update();
AWS.util.merge();
AWS.util.copy();
AWS.util.isEmpty();
AWS.util.arraySliceFn(() => {});
AWS.util.isType();
AWS.util.typeName('abc');
// AWS.util.error({'message': 'abc'} );

// WIP


console.log('version', AWS.VERSION);


// const lambda = new AWS.lambda();

const params = {

};
