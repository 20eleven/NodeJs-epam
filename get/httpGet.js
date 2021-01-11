const http = require('http')

const options = {
   host: 'localhost',
   path: '/?name=Pavel',
   port: '8080'
}

const callback = response => {
   let str = ''
   response.on('data', (chunk) => {
      str += chunk.toString()
   })
   response.on('end', () => {
      console.log(str)
   })
}

const req = http.request(options, callback)
req.end()

// node httpGet.js