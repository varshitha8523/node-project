// user.js model can be created by mongoose so importing mongoose
const mongoose=require('mongoose')
// creating model/schema/collection
// new mongoose means creating a new instance here
const usersSchema=new mongoose.Schema({
    // feild name ,type and required is to insert record inside it if true value can be inserted and false means no need to insert value  
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})
// expoting 
module.exports=mongoose.model('Users',usersSchema)
// mongoose.model('') by this we are instantiate as a model
// Users is collection name,usersSchema is the schema we created


//  by the above line mongoose understands we have to use users collections of usersSchema  schema

// these code can be used directly in routes->user.js file inside routers.post    