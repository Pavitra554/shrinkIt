const mongoose = require('mongoose')

const url_schema = mongoose.Schema({
    originalUrl:{
        type:String,
        require:true
    },
    shortUrl:{
        type:String,
        require:true
    }
})

const url = mongoose.model('url',url_schema)
module.exports = url