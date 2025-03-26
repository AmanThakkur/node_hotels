const mongoose = require ('mongoose')

// Define the MongoDB Connetion URL

const mongoURL ='mongodb://localhost:27017/hotels' // REplace 'mydatabase' with your database name

// Set up MongoDB Connection 

mongoose.connect(mongoURL ,{
    useNewUrlParser: true ,
    useUnifiedTopology: true ,
})

//Get the default connection 
//Mongoose Maintians a default connection object representing the MongoDB connection.

const db = mongoose.connection;

//Define event listenrs for database connection

db.on('connected', () => {
    console.log('Connected to MongoDB server');
}) ;

db.on('error' ,(err) => {
    console.log('MongoDB connection error:' , err);    
}) ;

db.on('disconnected' ,() => {
    console.log('Disconnected to MongoDB server');
});

// export the database connection 

module.exports = db ;

