var axios = require('axios')

var config = {
  method: 'get',
  url: 'https://seal-app-793dc.ondigitalocean.app/api/listings/?page_size=3&page=1',
  headers: {},
}

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data))
  })
  .catch(function (error) {
    console.log(error)
  })
