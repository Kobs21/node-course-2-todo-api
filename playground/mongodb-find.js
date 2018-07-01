// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");


var user = {name:"Jake",age:22};
var {name} = user;
console.log(name);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if(err){
        return console.error("Unable to connect to database server.");
    }
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");
    
    // db.collection("Todos").find({
    //     _id: new ObjectID("5b3527b629e13a63c05cbc5d")
    // }).toArray().then((docs) =>{
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs,undefined,2));

    // }, (err) => {
    //     console.log("Unable to fetch todos",err);
    // });

    db.collection("Todos").find().count().then((count) =>{
        console.log(`Todos count: ${count}`);

    }, (err) => {
        console.log("Unable to fetch todos",err);
    });

    db.collection("Users").find({name:"Jake"}).toArray().then((user) => {
        console.log(JSON.stringify(user,undefined,2));
    }, (err) => {
        console.log("Unable to find user",err);
    })
    //db.close();
});