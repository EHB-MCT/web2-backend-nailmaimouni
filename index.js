const express = require('express')
const app = express()
const cors = require('cors')

let users= [];

app.use(express.urlencoded({extended:false}));
app.use(cors())
app.use(express.json())

app.post("/register", (req,res) => {
   // Check for empty fields
      //username
      if(!req.body.username){
         res.status(401).send({
             status: "bad Request",
             message: "some field is missing: username"
         })
         return
     }
 
     //email
     if(!req.body.email){
         res.status(401).send({
             status: "bad Request",
             message: "some field is missing: email"
         })
         return
     }
 
     //password
     if(!req.body.password){
         res.status(401).send({
             status: "bad Request",
             message: "some field is missing: password"
         })
         return
     }
   // Save the users array
     users.push({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
     })


   // Send back response when user is saved
   


   res.send({
      status: "Saved",
      message:"User has been saved"
   })
})


app.post("/login", (req,res) => {
   // Check for empty fields
     //email
     if(!req.body.email){
         res.status(401).send({
             status: "bad Request",
             message: "some field is missing: email"
         })
         
     }
 
     //password
     if(!req.body.password){
         res.status(401).send({
             status: "bad Request",
             message: "some field is missing: password"
         })
      }
   // Check for user in array users
   let user = users.find(zizi)
   
     
     res.send({
      status: "ok",
      message:"ok"
   })
   })

app.listen(3000);
console.log("app running at http://localhost:3000");




// const { MongoClient } = require("mongodb");
 
// // Replace the following with your Atlas connection string                                                                                                                                        
// const url = "mongodb+srv://admin:admin@web-2023.doknquq.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(url);
 
//  // The database to use
//  const dbName = "HotdogFactory";
                      
//  async function run() {
//     try {
//          await client.connect();
//          console.log("Connected correctly to server");
//          const db = client.db(dbName);

//          // Use the collection "people"
//          const col = db.collection("hotdogs");

//          // Construct a document                                                                                                                                                              
//          let hotdogDocument = {
//             title: "Hooter's Hot Dogs",
//             ingredients: "1 Loaf Frozen Bread Dough"
//          }

//          // Insert a single document, wait for promise so we can read it back
//          const p = await col.insertOne(hotdogDocument);
//          // Find one document
//          const myDoc = await col.findOne();
//          // Print to the console
//          console.log(myDoc);

//         } catch (err) {
//          console.log(err.stack);
//      }
 
//      finally {
//         await client.close();
//     }
// }

// run().catch(console.dir);
