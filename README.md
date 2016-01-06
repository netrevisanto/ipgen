NodeJS wrapper arround the steerapi c code, of same name https://github.com/steerapi/ipgen

### Instalation
	npm install ipgen

How to use?
### You can send an json object to the generate method, containing:
	require("ipgen").generate({
		host: 'localhost',
		port: '5556',
		bandwidth: 1000, // 1 kbps
		time: 10000 // for how long? in miliseconds
	})

### Or even supply with a callback!
	require("ipgen").generate({
		host: 'localhost',
		port: '5556',
		bandwidth: 1000, // 1 kbps
		time: 10000 // for how long? in miliseconds
	}, function(err,succ){
		if (err) throw err;
		console.log("Network flush is over!")
	});

### For a less verbose output, please, start with silent parameter:
	require("ipgen").generate({
		silent: true,
		host: 'localhost',
		port: '5556',
		bandwidth: 1000, // 1 kbps
		time: 10000 // for how long? in miliseconds
	}, function(err,succ){
		if (err) throw err;
		console.log("Network flush is over!")
	});

### You can also specify the source IP address for an execution(Default is 127.0.0.1):
	require("ipgen").generate({
		silent: true,
		host: 'localhost',
		port: '5556',
		bandwidth: 1000, // 1 kbps
		time: 10000, // for how long? in miliseconds
		srcIp: '1.1.1.1' // Will generate packages with source ip address like 1.1.1.1
	}, function(err,succ){
		if (err) throw err;
		console.log("Network flush is over!")
	});

### Credits
* [Neto Trevisan] - Backend/Frontend Web Developer

[Neto Trevisan]:http://netrevisanto.com
