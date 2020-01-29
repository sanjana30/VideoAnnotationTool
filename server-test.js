//const { createServer } = require('https')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
var https = require('https')
var fs = require('fs')


var options = {
    key: fs.readFileSync('/etc/ssl/apache2/ivc.key'),
    cert: fs.readFileSync('/etc/ssl/apache2/ivc.crt'),
};

var server = https.createServer(options, app).listen(8080, function(){
    console.log("Express server listening on port " + 8080);
});

/*
app.prepare().then(() => {
    createServer((req, res) => {
	// Be sure to pass `true` as the second argument to `url.parse`.
	// This tells it to parse the query portion of the URL.
	const parsedUrl = parse(req.url, true)
	const { pathname, query } = parsedUrl

	if (pathname === '/a') {
	    app.render(req, res, '/b', query)
	} else if (pathname === '/b') {
	    app.render(req, res, '/a', query)
	} else {
	    handle(req, res, parsedUrl)
	}
    }).listen(8080, err => {
	if (err) throw err
	console.log('> Ready on https://ivc.ischool.utexas.edu:8080')
    })
})
*/