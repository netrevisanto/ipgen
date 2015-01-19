var spawn = require("child_process").spawn;
require("colors");
module.exports = {
    generate: function(obj) {
        /*
			obj.host 
			obj.port
			obj.bandwidth
			obj.time
		*/
        obj.time = obj.time || 10000;
        var caminho = __dirname + "/../bin/ipgen"
        obj.host = obj.host || 'localhost'
        obj.bandwidth = obj.bandwidth || 100000;
        obj.port = obj.port || 5556;
        var processo = spawn(caminho, ['-cl', '1024', '-b', '100000', obj.host, obj.port]);
        console.log("Starting network flush...".yellow)
        processo.stdout.on("data", function(dados) {
            console.log("Network flush sent!".green);
        });
        processo.on('close', function(code) {
            console.log(('Ended ipgen with ' + code).red);
        });
        setTimeout(function() {
            processo.kill('SIGINT');
        }, obj.time);
    },

}