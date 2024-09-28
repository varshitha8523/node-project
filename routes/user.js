// routes

// const express=require('express')//to create a rotuer we need express module

// const router=express.Router();//to get a router we have to have it in express object
// // below same as app.get............as in server .js

// // if u want  to get all users data
// router.get('/',(req,res)=>{
// res.json({ message:'user get sucess'})

// })

// // if u want  to get specific user data
// // in  below line  ' /: ' indicates it is a path param and the path should be '/users/1  in place of 1 we can use 21 or 23 or any numeric value or id'
// router.get('/:id',(req,res)=>{
//     res.json({message:'single user get success'})

// })



// module.exports=router


// // understanding the post man

// const express=require('express')//to create a rotuer we need express module

// const router=express.Router();//to get a router we have to have it in express object
// // below same as app.get............as in server .js

// // if u want  to get all users data
// router.get('/',(req,res)=>{
// res.json({ message:'user get sucess'})

// })

// // if u want  to get specific user data
// // in  below line  ' /: ' indicates it is a path param and the path should be '/users/1  in place of 1 we can use 21 or 23 or any numeric value or id'
// router.get('/:id',(req,res)=>{
//     res.json({message:'single user get success'})

// })
// // creating post to create a user
// router.post('/',(req,res)=>{
//     console.log(req.body)//  printing the data created by post   in console 
//     res.status(200).json({message:'A user created'})
// })
// // now in postman under  node-express folder in post in this under body our code to be posted is their by clicking 
// // send u get the above msg content


// module.exports=router


   
// // put and delete  request

// const express=require('express')//to create a rotuer we need express module

// const router=express.Router();//to get a router we have to have it in express object
// // below same as app.get............as in server .js

// // if u want  to get all users data
// router.get('/',(req,res)=>{
//     console.log(req.query)// prints all query params u mentioned
// res.json({ message:'user get sucess'})

// })

// // if u want  to get specific user data
// // in  below line  ' /: ' indicates it is a path param and the path should be '/users/1  in place of 1 we can use 21 or 23 or any numeric value or id'
// router.get('/:id',(req,res)=>{
//     res.json({message:'single user get success'})

// })
// // creating post to create a user
// // adding new in below line because to make the post endpoint different from get endpoint and make post more descriptive 
// router.post('/new ',(req,res)=>{
//     console.log(req.body)//  printing the data created by post   in console 
//     // user is created in db
//     res.status(200).json({message:'A user created'})
// })
// // now in postman under  node-express folder in post in this under body our code to be posted is their by clicking 
// // send u get the above msg content
    


// // update a user details
// router.put('/update/:id',(req,res)=>{
//     console.log(req.params)//to print which user u are updating i.e, path parameters
//     // console.log(req.body)//  printing the data created by put    in console 
//     //user updated in db
//     res.status(200).json({message:'user details updated'})
// })  



// // delete a user 
// router.delete('/delete/:id',(req,res)=>{
//        //user deleted in db
//     res.status(200).json({message:'user deleted'})
// })  

// module.exports=router


   

// //creating users data model and get request

// const express=require('express')//to create a rotuer we need express module

// const router=express.Router();//to get a router we have to have it in express object

// // importing collection

// const User=require('../models/user')// it is user obj instantiated from models

// // below same as app.get............as in server .js

// // if u want  to get all users data
// router.get('/',async(req,res)=>{
//     // writing in try catch block because as may be their is an error in retreiving the data from db
//     try{
//     const usersData= await User.find() //find will give u all the users record
//     res.status(200).json({ data:usersData})//200 is ok status
//     }catch(err){
//         res.status(500).json({message:err.message})// 500 means internal server   error and genenrally while their is an issue in connecting with db while querying
//         // err.message is the mesg  that directly given by db or it can our customised msg
//     }

// })

// // if u want  to get specific user data
// // in  below line  ' /: ' indicates it is a path param and the path should be '/users/1  in place of 1 we can use 21 or 23 or any numeric value or id'
// router.get('/:id',async(req,res)=>{
//     const user=await User.findById(req.params.id)//findById as we req the user with id and as id is parameter so req.params.id 
//     if(user){
//         res.json({data:user})//here we can or cannot send status as 200 because whenever u 
//         // send something it automatically take it as 200 but for error should specify status to understand it better from frontend
//     }
//     else{
//         res.status(404).json({message:'user not found'})// 404 is used when requested data is not found in the db
//     }

// })
// // creating post to create a user
// // adding new in below line because to make the post endpoint different from get endpoint and make post more descriptive 
// router.post('/new', async (req,res)=>{ 
//     //  create obj for user model imported 
//     const newUser=new User({userName:req.body.userName})//here userName: is given as req.body.userName, User is the obj by this obj we are sending the forntend data to the user model as a parameter
//     //  as we are writing db query in above 2nd line async and below await is used as db return a promise
// //    pushing the user obj into db
//     await newUser.save() //with this method we can save data in mongodb

//     // user is created in db
//     res.status(200).json({message:'A user created'})
// })
// // now in postman under  node-express folder in post in this under body our code to be posted is their by clicking 
// // send u get the above msg content
    


// // update a user details
// router.put('/update/:id',(req,res)=>{
//     console.log(req.params)//to print which user u are updating i.e, path parameters
//     // console.log(req.body)//  printing the data created by put    in console 
//     //user updated in db
//     res.status(200).json({message:'user details updated'})
// })  



// // delete a user 
// router.delete('/delete/:id',(req,res)=>{
//        //user deleted in db
//     res.status(200).json({message:'user deleted'})
// })  

// module.exports=router


   
//put patch and delete

const express=require('express')//to create a rotuer we need express module

const router=express.Router();//to get a router we have to have it in express object

// importing collection

const User=require('../models/user');// it is user obj instantiated from models
const user = require('../models/user');

// below same as app.get............as in server .js

// if u want  to get all users data
router.get('/',async(req,res)=>{
    // writing in try catch block because as may be their is an error in retreiving the data from db
    try{
    const usersData= await User.find() //find will give u all the users record
    res.status(200).json({ data:usersData})//200 is ok status
    }catch(err){
        res.status(500).json({message:err.message})// 500 means internal server   error and genenrally while their is an issue in connecting with db while querying
        // err.message is the mesg  that directly given by db or it can our customised msg
    }

})

// if u want  to get specific user data
// in  below line  ' /: ' indicates it is a path param and the path should be '/users/1  in place of 1 we can use 21 or 23 or any numeric value or id'
router.get('/:id',async(req,res)=>{
    const user=await User.findById(req.params.id)//findById as we req the user with id and as id is parameter so req.params.id 
    if(user){
        res.json({data:user})//here we can or cannot send status as 200 because whenever u 
        // send something it automatically take it as 200 but for error should specify status to understand it better from frontend
    }
    else{
        res.status(404).json({message:'user not found'})// 404 is used when requested data is not found in the db
    }

})
// creating post to create a user
// adding new in below line because to make the post endpoint different from get endpoint and make post more descriptive 
router.post('/new', async (req,res)=>{ 
    //  create obj for user model imported 
    const newUser=new User({userName:req.body.userName})//here userName: is given as req.body.userName, User is the obj by this obj we are sending the forntend data to the user model as a parameter
    //  as we are writing db query in above 2nd line async and below await is used as db return a promise
//    pushing the user obj into db
    await newUser.save() //with this method we can save data in mongodb

    // user is created in db
    res.status(200).json({message:'A user created'})
})
// now in postman under  node-express folder in post in this under body our code to be posted is their by clicking 
// send u get the above msg content
    


// updating a user specified field of a record using patch
router.patch('/update/:id',async(req,res)=>{
    // finding user object
    const user=await User.findById(req.params.id)//findById as we req the user with id and as id is parameter so req.params.id 
  user.userName=req.body.userName;// UPDATING USERNAMe 
//   if u wnat to upadate other feilds of a record u can use the above line and in place of userName write the required field name an d save
  await user.save()
    //user updated in db
    res.status(200).json({message:'user details updated'})
})  



// delete a user 
router.delete('/delete/:id',async(req,res)=>{
        await User.findOneAndDelete(req.params.id)//specified user is deleted
       //user deleted in db
    res.status(200).json({message:'user deleted'})
})  

module.exports=router


   