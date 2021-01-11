const http = require('http')
const url = require('url')
const port = 8080

const requestHandler = (request, response) => {
   const name = url.parse(request.url, true).query.name
   console.log('Accessed by url', request.url)
   response.end(`Hello ${name}!`)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
   if (err) {
      return console.log('The exception happend', err)
   }

   console.log(`Server listening on port ${port}`)
})

//node server.js

//http://localhost:8080/?name=yourName
