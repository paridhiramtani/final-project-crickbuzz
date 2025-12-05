const mongoose = require('mongoose')

const liveScoreSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    match : {type:String , required:true},
    venue : {type:String , required:true},
    team1 : {type:String , required:true},
    score1 : {type:String , required:true},
    team2 : {type:String , required:true},
    score2 : {type:String , required:true},
    toss : {type:String , required:true},
    result : {type:String , required:true}
}) 
module.exports = mongoose.model('livescore',liveScoreSchema)
