//module.exports = require("./lib/ipgen");

require("./lib/ipgen").generate({
	host: 'localhost',
	port: '5556',
	bandwidth: 1000, // 1 kbps
	time: 10000, // for how long? in miliseconds,
	srcIp: '1.1.1.1'
})