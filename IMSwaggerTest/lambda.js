const IM_API_DOCS = require('./im-api-docs.json');

exports.handler = function(event, context, callback) {
    
    console.log(IM_API_DOCS);
    callback(null, IM_API_DOCS);
}