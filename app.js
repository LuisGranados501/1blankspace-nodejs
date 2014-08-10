var mydigitalstructure = require('./mydigitalstructure')

mydigitalstructure.init('', mydigitalstructure.logon(appMain))

function appMain(err, data)
{
	//console.log(data)

	var http = require('http');

	http.createServer(function (req, res)
	{
  		res.writeHead(200, {'Content-Type': 'text/plain'});
  		res.end('Hello World\n');
	}).listen(1337, '127.0.0.1');
	
	console.log('Server running at http://127.0.0.1:1337/');
}

34 854