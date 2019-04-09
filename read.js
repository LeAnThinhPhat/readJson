var rp = require('request-promise');

var options = {
    uri: 'https://api.fimplus.io/cm/hd1/v1/search/nguoi',
    qs: {
        access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx'
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};
 
rp(options)
    .then(function (repos) {
        console.log(repos)
    })
    .catch(function (err) {
        console.log(err)
    });