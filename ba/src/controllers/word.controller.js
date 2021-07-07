const Word = require('../models/word.model')

const addWord = async (req, res) => {
    try{
        let word = await Word.create(req.body)
        return res.status(201).json({data:word})

    }
    catch(err){
         return res.status(500).json({error :"Something went wrong"})
    }
}

const getData = async(req,res) => {
    let q = req.url?.split("?")
    let id = q[1]?.split("=")
    // console.log(id[1])
    
    
    if(id)
    {
            try{
                // let data = await Word.find({_id:{$regex:req.body}})
                let data = await Word.find({_id:{$regex:id[1]}})
                return res.status(200).json({data:data})
        }
        catch(err){
            return res.status(500).json({error :"Something went wrong"})
        }
        
    }
    else{
            try{
                let data = await Word.find()
                return res.status(201).json({data:data})
        }
        catch(err){
            return res.status(500).json({error :"Something went wrong"})
        }
    }
}

module.exports = { addWord, getData }