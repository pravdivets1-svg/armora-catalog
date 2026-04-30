const fs = require('fs');
const data = JSON.parse(fs.readFileSync('C:/Users/Mi/armora/doors-armora.json','utf8'));
const min = JSON.stringify(data);
fs.writeFileSync('C:/Users/Mi/armora/.kilo/armora-data-min.json', min, 'utf8');
console.log('len=' + min.length);
