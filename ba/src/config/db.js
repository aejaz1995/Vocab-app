const mongoose = require("mongoose")
const connect = async () =>{

    return mongoose.connect("mongodb://localhost:27017/dictionary", {
        useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    })

}

module.exports = connect