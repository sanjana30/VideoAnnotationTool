const https = require('https')
const { parse } = require('url')
const next = require('next')
const fs = require('fs')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const options = {
    key: fs.readFileSync('/etc/ssl/apache2/ivc.key'),
    cert: fs.readFileSync('/etc/ssl/apache2/ivc.crt')
}

app.prepare().then(() => {
    https
	.createServer(options, (req, res) => {
	    // Be sure to pass `true` as the second argument to `url.parse`.
	    // This tells it to parse the query portion of the URL.
	    const parsedUrl = parse(req.url, true)

	    handle(req, res, parsedUrl)
	})
	.listen(8080, err => {
	    if (err) throw err
	    // eslint-disable-next-line no-console
	    console.log('> Ready on https://ivc.ischool.utexas.edu:8080')
	})
})