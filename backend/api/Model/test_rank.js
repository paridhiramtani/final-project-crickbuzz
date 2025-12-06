const mongoose = require('mongoose')

const Test_Rank = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    position : {type:Number , required:true},
    photo : {type:String , required:true},
    pName : {type:String , required:true},
    country : {type:String , required:true},
    rating : {type:Number , required:true},
})

module.exports = mongoose.model('test',Test_Rank)
