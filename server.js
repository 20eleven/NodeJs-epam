const http = require('http')
const url = require('url')
const port = 8080

const requestHandler = (request, response) => {
   let urlRequest = url.parse(request.url, true)
   const name = urlRequest.query.name

   if (request.method == 'GET') {
      if (name === 'Pavel') {
         response.end(`Here we go again`)
      } else {
         response.end(`Hi ${name}!`)
      }      
   }
   
   if (request.method == 'POST') {
      let body = ''
      request.on('data', (chunk) => {
         body += chunk.toString()
      })
      request.on('end', () => {
         console.log(body)
         response.end('kk, end')
      })
   }
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
   if (err) {
      return console.log('The exception happend', err)
   }
   console.log(`Server listening on port ${port}`)
})

// node server.js

// http://localhost:8080/?name=yourName
