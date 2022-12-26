const http = require('http')

const port = 3000

const server = http.createServer(function(req, res) {

})

server.listen(port, function(err) {
  if (err) {
    console.log('Something went wrong', err)
  } else {
    console.log('Server is listening on port ' + port)
  }
})