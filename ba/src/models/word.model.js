const mongoose = require("mongoose")

// const Examples = new mongoose.Schema({
//     text :String
// })

// const SubSenses = new mongoose.Schema({
//     definitions :[String],
//     examples :[Examples]
// })

// const Senses = new mongoose.Schema({
//     definitions : [String],
//     examples :[Examples],
//     subsenses :[SubSenses]
// })
// const Entries = new mongoose.Schema({
//     etymologies :[String],
//     senses : [Senses]
// })
// const LexicalEntries = new mongoose.Schema({
//     entries :[ Entries ],
//     lexicalCategories :{
//         id: String, 
//         text:String
//     }    
// })

// main Schema 
const wordSchema = new mongoose.Schema({
    
    _id:{type: String, required: true},
    
    lexicalEntries :{type: String}    

},{ versionKey:false})

module.exports = mongoose.model("word", wordSchema)