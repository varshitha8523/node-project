//adding express js

// const express=require('express');
// const app=express()//by calling express it will create us the app instance using express module  which  help    us to create our own server
// app.get('/',(req,res)=>{
//     res.status(200).json({message: 'hello work'})
// })


// app.listen(5000)
// console.log('server is listening on 5000')  




// routes



// const express=require('express');
// const app=express()//by calling express it will create us the app instance using express module  which  help    us to create our own server
// app.get('/',(req,res)=>{
//     res.status(200).json({message: 'hello work'})
// })

// const userRouter=require('./routes/user')

// // use method in app tries to use /users
// app.use('/users',userRouter)
// // the above lines is about /users is primary the subroutes after /users i.e /users/ or /users/1 these   will be get from the 
// //userRouter
// //if we use  not existing route like /admin it throw error like "can't get /admin"

// app.listen(5000)
// console.log('server is listening on 5000')  


// // understanding the postman

// const express=require('express');
// const app=express()//by calling express it will create us the app instance using express module  which  help    us to create our own server
// app.use(express.json())// it is a middleware which parse json data as forntend parses json data
// // without the above line  express would not parse body req and the o/p would be undefined
// app.get('/',(req,res)=>{
//     res.status(200).json({message: 'hello work'})
// })

// const userRouter=require('./routes/user')

// // use method in app tries to use /users
// app.use('/users',userRouter)
// // the above lines is about /users is primary the subroutes after /users i.e /users/ or /users/1 these   will be get from the 
// //userRouter
// //if we use  not existing route like /admin it throw error like "can't get /admin"

// app.listen(5000)
// console.log('server is listening on 5000')  




// // Mongoose   

// const express=require('express');
// // pasting  uri copied from mongodb
// const uri='mongodb+srv://varshithavemula:TZOGBeJW97ssembD@cluster0.ozdg2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// const app=express()//by calling express it will create us the app instance using express module  which  help    us to create our own server
// app.use(express.json())// it is a middleware which parse json data as forntend parses json data
// // without the above line  express would not parse body req and the o/p would be undefined


// // importing mongoose

// const mongoose=require('mongoose')

// // connect with db
// mongoose.connect(uri)//it gives us instance that is as below
// //get the connection
// const db=mongoose.connection//it gives u the connection which u already established like failure or success connection

// // below line is used to know whether its failure or successfull
// //  in below line open is the event name  i.e, the open connection with the db
// //to know whether its failure or successfull connection  .once is used ,.once is  the method and a event listener try to listen whether open event is their or not
// db.once('open',()=>{
// console.log('successfully connected to the db')
// // BELOW LINE Is used to know how many collections are their in our db
// // db.collections is the object which has key and value pair with db name and its own data 
// console.log(db.collections) //it assumes their is no  collection i.e  db is empty  as we created the collection db with  atlas and as we do not specify the db name


// })

// // if connection failed

// // below on is event listener it print console if error occurs
// // if  error occurance this  particular db is unable to connect
// db.on('error',(error)=>{
//     console.log(error)
// })







// app.get('/',(req,res)=>{
//     res.status(200).json({message: 'hello work'})
// })

// const userRouter=require('./routes/user')

// // use method in app tries to use /users
// app.use('/users',userRouter)
// // the above lines is about /users is primary the subroutes after /users i.e /users/ or /users/1 these   will be get from the 
// //userRouter
// //if we use  not existing route like /admin it throw error like "can't get /admin"

// app.listen(5000)
// console.log('server is listening on 5000')







// // Mongoose   

// const express=require('express');
// // pasting  uri copied from mongodb
// const uri='mongodb+srv://varshithavemula:TZOGBeJW97ssembD@cluster0.ozdg2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// const app=express()//by calling express it will create us the app instance using express module  which  help    us to create our own server
// app.use(express.json())// it is a middleware which parse json data as forntend parses json data
// // without the above line  express would not parse body req and the o/p would be undefined


// // setting the views
// app.set("view engine","ejs")//with this node server understands from where view files are created and what extentions does it have and renders html files

// // importing mongoose

// const mongoose=require('mongoose')

// // connect with db
// mongoose.connect(uri)//it gives us instance that is as below
// //get the connection
// const db=mongoose.connection//it gives u the connection which u already established like failure or success connection

// // below line is used to know whether its failure or successfull
// //  in below line open is the event name  i.e, the open connection with the db
// //to know whether its failure or successfull connection  .once is used ,.once is  the method and a event listener try to listen whether open event is their or not
// db.once('open',()=>{
// console.log('successfully connected to the db')
// // BELOW LINE Is used to know how many collections are their in our db
// // db.collections is the object which has key and value pair with db name and its own data 
// console.log(db.collections) //it assumes their is no  collection i.e  db is empty  as we created the collection db with  atlas and as we do not specify the db name


// })

// // if connection failed

// // below on is event listener it print console if error occurs
// // if  error occurance this  particular db is unable to connect
// db.on('error',(error)=>{
//     console.log(error)
// })


// app.get('/',(req,res)=>{
//     res.status(200).json({message: 'hello work'})
// })
// // signin
// app.get('/signin',(req,res)=>{
//     res.render('signin')//rendering signup.ejs file
// })

// // signup
// app.get('/signup',(req,res)=>{
//     res.render('signup')//rendering signin.ejs file
// })



// const userRouter=require('./routes/user')

// // use method in app tries to use /users
// app.use('/users',userRouter)
// // the above lines is about /users is primary the subroutes after /users i.e /users/ or /users/1 these   will be get from the 
// //userRouter
// //if we use  not existing route like /admin it throw error like "can't get /admin"

// app.listen(5000)
// console.log('server is listening on 5000')



// // creating signup method  and facing the issue

// const express=require('express');

// // importing bcryptjs
// const  bcrypt=require("bcryptjs")

// // impoting body-parser
// const bodyParser=require("body-parser")

// // pasting  uri copied from mongodb
// const uri='mongodb+srv://varshithavemula:TZOGBeJW97ssembD@cluster0.ozdg2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// const app=express()//by calling express it will create us the app instance using express module  which  help    us to create our own server
// app.use(express.json())// it is a middleware which parse json data as forntend parses json data
// // without the above line  express would not parse body req and the o/p would be undefined

// app.use(bodyParser.urlencoded({extended:true}))//encodes the url which we use for apis, bodyparser takes care of body

// // setting the views
// app.set("view engine","ejs")//with this node server understands from where view files are created and what extentions does it have and renders html files

// // importing mongoose

// const mongoose=require('mongoose')

// // connect with db
// mongoose.connect(uri)//it gives us instance that is as below
// //get the connection
// const db=mongoose.connection//it gives u the connection which u already established like failure or success connection

// // below line is used to know whether its failure or successfull
// //  in below line open is the event name  i.e, the open connection with the db
// //to know whether its failure or successfull connection  .once is used ,.once is  the method and a event listener try to listen whether open event is their or not
// db.once('open',()=>{
// console.log('successfully connected to the db')
// // BELOW LINE Is used to know how many collections are their in our db
// // db.collections is the object which has key and value pair with db name and its own data 
// console.log(db.collections) //it assumes their is no  collection i.e  db is empty  as we created the collection db with  atlas and as we do not specify the db name


// })

// // if connection failed

// // below on is event listener it print console if error occurs
// // if  error occurance this  particular db is unable to connect
// db.on('error',(error)=>{
//     console.log(error)
// })


// app.get('/',(req,res)=>{
//     res.status(200).json({message: 'hello work'})
// })
// // signin
// app.get('/signin',(req,res)=>{
//     res.render('signin')//rendering signup.ejs file
// })

// // signup
// app.get('/signup',(req,res)=>{
//     res.render('signup')//rendering signin.ejs file
// })

// //for signup method creating post req. in order to give the user a way  to register 
// app.post('/signup',async(req,res)=>{
//     const {name,email,password:plainTextPassword}=req.body;
//     const salt=await bcrypt.genSalt(10)
//     const encryptedPassword=bcrypt.hashSync(plainTextPassword,salt)//by this we get encrypted password here  salt   is the length of 
//     //  hash value need to be generated , in place of 10 in genSalt in above  2nd line we can give any value and salt is optional
// // higher the salt number stronger the encryption is 

//     // by the below try we are creating the user in db
//     try{ 
        
//         await user.create({
//            name,   
//            email,
//            password:encryptedPassword
//         })
//         res.redirect('/signin')
//     }
//     catch(error){
//         console.log(error)
//     }

// })



// const userRouter=require('./routes/user')
// const user=require('./models/user')

// // use method in app tries to use /users
// app.use('/users',userRouter)
// // the above lines is about /users is primary the subroutes after /users i.e /users/ or /users/1 these   will be get from the 
// //userRouter
// //if we use  not existing route like /admin it throw error like "can't get /admin"

// app.listen(5000)
// console.log('server is listening on 5000')



// // creating  login part

// const express=require('express');

// // importing bcryptjs
// const  bcrypt=require("bcryptjs")
 
// // impoting body-parser
// const bodyParser=require("body-parser")
// // making sure that node is using .env
// require('dotenv').config()//thereby node understands their is an .env file and use the Mongo_uri in it


// const app=express()//by calling express it will create us the app instance using express module  which  help    us to create our own server
// app.use(express.json())// it is a middleware which parse json data as forntend parses json data
// // without the above line  express would not parse body req and the o/p would be undefined

// app.use(bodyParser.urlencoded({extended:true}))//encodes the url which we use for apis, bodyparser takes care of body

// // setting the views
// app.set("view engine","ejs")//with this node server understands from where view files are created and what extentions does it have and renders html files

// // importing mongoose

// const mongoose=require('mongoose')

// // connect with db
// mongoose.connect(process.env.MONGO_URI)//it gives us instance that is as below
// //get the connection
// const db=mongoose.connection//it gives u the connection which u already established like failure or success connection

// // below line is used to know whether its failure or successfull
// //  in below line open is the event name  i.e, the open connection with the db
// //to know whether its failure or successfull connection  .once is used ,.once is  the method and a event listener try to listen whether open event is their or not
// db.once('open',()=>{
// console.log('successfully connected to the db')
// // BELOW LINE Is used to know how many collections are their in our db
// // db.collections is the object which has key and value pair with db name and its own data 
// console.log(db.collections) //it assumes their is no  collection i.e  db is empty  as we created the collection db with  atlas and as we do not specify the db name


// })

// // if connection failed

// // below on is event listener it print console if error occurs
// // if  error occurance this  particular db is unable to connect
// db.on('error',(error)=>{
//     console.log(error)
// })


// app.get('/',(req,res)=>{
//     res.status(200).json({message: 'hello work'})
// })
// // signin
// app.get('/signin',(req,res)=>{
//     res.render('signin')//rendering signup.ejs file
// })

// // signup
// app.get('/signup',(req,res)=>{
//     res.render('signup')//rendering signin.ejs file
// })

// //for signup method creating post req. in order to give the user a way  to register 
// app.post('/signup',async(req,res)=>{
//     const {name,email,password:plainTextPassword}=req.body;
//     const salt=await bcrypt.genSalt(10)
//     const encryptedPassword=bcrypt.hashSync(plainTextPassword,salt)//by this we get encrypted password here  salt   is the length of 
//     //  hash value need to be generated , in place of 10 in genSalt in above  2nd line we can give any value and salt is optional
// // higher the salt number stronger the encryption is 

//     // by the below try we are creating the user in db
//     try{ 
        
//         await user.create({
//            name,   
//            email,
//            password:encryptedPassword
//         })
//         res.redirect('/signin')
//     }
//     catch(error){
//         console.log(error)
//     }

// })

// //for signup creating post req

// app.post('/signin',async(req,res)=>{
//     const {email,password}=req.body
//     const userObj=await user.findOne({email})//with email check whether the user exist or not
//     if(!userObj){
//         res.send({error:"user does not exist",status:404})
//     }
//     // bcrypt.compare checks whether plain password entered by user while logining in is matched with encrypted pswd an if true then below if executed
//     if(bcrypt.compare(password,userObj.password)){
        
//         res.render('home')

//     }
// })

// const userRouter=require('./routes/user')
// const user=require('./models/user')

// // use method in app tries to use /users
// app.use('/users',userRouter)
// // the above lines is about /users is primary the subroutes after /users i.e /users/ or /users/1 these   will be get from the 
// //userRouter
// //if we use  not existing route like /admin it throw error like "can't get /admin"

// app.listen(5000)
// console.log('server is listening on 5000')






// Implementation of Jwt

const express=require('express');

// importing bcryptjs
const  bcrypt=require("bcryptjs")
 
// impoting body-parser
const bodyParser=require("body-parser")

// importing cookie-parser
const cookieParser=require("cookie-parser")

// making sure that node is using .env
require('dotenv').config()//thereby node understands their is an .env file and use the Mongo_uri in it

// impoting jwt 
const jwt=require('jsonwebtoken')


const app=express()//by calling express it will create us the app instance using express module  which  help    us to create our own server
app.use(express.json())// it is a middleware which parse json data as forntend parses json data
// without the above line  express would not parse body req and the o/p would be undefined

app.use(bodyParser.urlencoded({extended:true}))//encodes the url which we use for apis, bodyparser takes care of body

// setting the views
app.set("view engine","ejs")//with this node server understands from where view files are created and what extentions does it have and renders html files

// to parser cookie
app.use(cookieParser())//by this nodejs use cookie pareser
// importing mongoose

const mongoose=require('mongoose')

// connect with db
mongoose.connect(process.env.MONGO_URI)//it gives us instance that is as below
//get the connection
const db=mongoose.connection//it gives u the connection which u already established like failure or success connection

// below line is used to know whether its failure or successfull
//  in below line open is the event name  i.e, the open connection with the db
//to know whether its failure or successfull connection  .once is used ,.once is  the method and a event listener try to listen whether open event is their or not
db.once('open',()=>{
console.log('successfully connected to the db')
// BELOW LINE Is used to know how many collections are their in our db
// db.collections is the object which has key and value pair with db name and its own data 
console.log(db.collections) //it assumes their is no  collection i.e  db is empty  as we created the collection db with  atlas and as we do not specify the db name


})

// if connection failed

// below on is event listener it print console if error occurs
// if  error occurance this  particular db is unable to connect
db.on('error',(error)=>{
    console.log(error)
})

// the below route should be a protected route 
app.get('/',(req,res)=>{
    // to verify  a user is protected or not for this we need to verify the token for this we are pulling out the token below
    const {token}=req.cookies// pulling out token form cookies
    if(token){//below if token their
        const tokenData=jwt.verify(token,process.env.JWT_SECRET_KEY)//verifying token using jwt
        if(tokenData.type=='user'){
            res.render('home')
        }
    }
   
    else{//if token not their
        res.redirect('/signin')
    }
        
   
})
// signin
app.get('/signin',(req,res)=>{
    res.render('signin')//rendering signup.ejs file
})

// signup
app.get('/signup',(req,res)=>{
    res.render('signup')//rendering signin.ejs file
})

//for signup method creating post req. in order to give the user a way  to register 
app.post('/signup',async(req,res)=>{
    const {name,email,password:plainTextPassword}=req.body;
    const salt=await bcrypt.genSalt(10)
    const encryptedPassword=bcrypt.hashSync(plainTextPassword,salt)//by this we get encrypted password here  salt   is the length of 
    //  hash value need to be generated , in place of 10 in genSalt in above  2nd line we can give any value and salt is optional
// higher the salt number stronger the encryption is 

    // by the below try we are creating the user in db
    try{ 
        
        await user.create({
           name,   
           email,
           password:encryptedPassword
        })
        res.redirect('/signin')
    }
    catch(error){
        console.log(error)
    }

})

//for signup creating post req

app.post('/signin',async(req,res)=>{
    const {email,password}=req.body
    const userObj=await user.findOne({email})//with email check whether the user exist or not
    if(!userObj){
        res.send({error:"user does not exist",status:404})
    }
    // bcrypt.compare checks whether plain password entered by user while logining in is matched with encrypted pswd an if true then below if executed
   try{
    if( bcrypt.compare(password,userObj.password)){
        // generating jwt token
        const token=jwt.sign({  //sign is the method which is used to create the token
            userId:userObj._id,email:email,type:'user'
        },process.env.JWT_SECRET_KEY,{expiresIn:'2h'}) //here expiresin 2h is the token expires in 2hrs
        res.cookie('token',token,{maxAge:2*60*60*1000}) //here 2hrs in converted into ms to make it understtand , as it don't take dircet 2 hrs
        res.redirect('/')

    }
   }catch(error){
    console.log(error)

   }
})

const userRouter=require('./routes/user')
const user=require('./models/user')

// use method in app tries to use /users
app.use('/users',userRouter)
// the above lines is about /users is primary the subroutes after /users i.e /users/ or /users/1 these   will be get from the 
//userRouter
//if we use  not existing route like /admin it throw error like "can't get /admin"

app.listen(5000)
console.log('server is listening on 5000')