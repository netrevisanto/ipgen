var spawn = require("child_process").spawn;
require("colors");
module.exports = {
    generate: function(obj, callback) {
        /*
			obj.host 
			obj.port
			obj.bandwidth
			obj.time
		*/
        var err = null;
        obj.time = obj.time || 10000;
        var caminho = __dirname + "/../bin/ipgen"
        obj.host = obj.host || 'localhost'
        obj.bandwidth = obj.bandwidth || 100000;
        obj.port = obj.port || 5556;
        var processo = spawn(caminho, ['-cl', '1024', '-b', '100000', obj.host, obj.port]);
        if (!obj.silent)
            console.log("Starting network flush...".yellow)
        processo.stdout.on("data", function(dados) {
            if (!obj.silent)
                console.log("Network flush sent!".green);
        });
        processo.stderr.on("data", function(dados) {
            err = dados;
        });
        processo.on('close', function(code) {
            if (!obj.silent)
                console.log(('Ended ipgen with ' + code).red);
        });
        setTimeout(function() {
            processo.kill('SIGINT');
            if (callback)
                callback(err, obj);
        }, obj.time);
    },

}