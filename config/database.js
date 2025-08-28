const mongoose= require("mongoose")

const connectDatabase =()=>{
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(con=>{
        console.log(`Mongo DB is connected:${con.connection.host}`)
    }).catch((err)=>{
        console.log(`error conecting to MongoDB:${err.message}`)
        process.exit(1)
    })
}


module.exports=connectDatabase


