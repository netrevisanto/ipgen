var spawn = require("child_process").spawn;
var shelljs = require("shelljs");
require("colors");
module.exports = {
    generate: function(obj, callback) {
        /*
			obj.host  
			obj.port
			obj.bandwidth
			obj.time
            obj.osTipe
		*/
        var err = null;
        obj.time = obj.time || 10000;

        obj.host = obj.host || 'localhost';
        obj.bandwidth = obj.bandwidth || 100000;
        obj.port = obj.port || 5556;

        obj.osTipe = obj.osTipe || 'guess';
        var caminho = __dirname;

        switch (obj.osTipe) {
            case '32':
                caminho += "/../bin/ipgen32"
                break;
            case '64':
                caminho += "/../bin/ipgen64"
                break;
            default:
                caminh += module.exports.guessOsType();
        }
        var processo = spawn(caminho, ['-cl', '1024', '-b', '100000', obj.host, obj.port]);
        if (!obj.silent)
            console.log("Starting network flush...".yellow)
        processo.stdout.on("data", function(dados) {
            if (!obj.silent)
                console.log("Network flush sent!".green);
        });
        processo.stderr.on("data", function(dados) {
            if (!obj.silent)
                console.log("Network flush failed!".red, dados);
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
    guessOsType: function(callback) {
        if (!obj.silent)
            console.log("Guessing OS type....".yellow);
        var resposta = shelljs.exec('arch', {
            silent: true
        });
        console.log(" " + data + " " + resposta.output.toString().trim());
        if (resposta.output.toString().indexOf("i686") > -1) {
            if (!obj.silent)
                console.log("32 Bits".green);
            return "/../bin/ipgen32";
        } else {
            if (!obj.silent)
                console.log("64 Bits".green);
            return "/../bin/ipgen64";
        }
    },
}