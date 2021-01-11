const http = require('http')

const options = {
   host: 'localhost',
   path: '/',
   port: '8080',
   method: 'POST',
   headers: {
      WhatWillSaveTheWorld: 'Love'
   }
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
req.write('POST request with the header')
req.end()

// node httpPost.js