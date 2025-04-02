import mongoose from "mongoose";

// console.log(process.env.MONGODB_URI);

function connect(){
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("connected to db");
    })
    .catch(err=>{
        console.log('error in db')
        console.log(err);
    })
}

export default connect;