// var prompt = require("prompt-sync")();

// const age = prompt("Please enter your age: ");
// if (age < 18) {
//   console.log("You get a 20% discount");
// } else if (age >= 18 && age <= 65) {
//   console.log("Normal Price");
// } else {
//   console.log("You get a 30% discount");
// }

// function area(length , width) {
//     return length * width
// }

// const result = area( 5 , 6)

// console.log(result);

// Define the product object template using a constructor function

// function Product(name, price, instock) {
//   this.name = name;
//   this.price = price;
//   this.instock = instock;
// }

// const product1 = new Product("laptop", 25000, true);
// const product2 = new Product("Mobile", 48000, false);
// const product3 = new Product("Watch", 5000, false);

// console.log("product1 :", product1);
// console.log("product2 :", product2);
// console.log("product3 :", product3);


// const guestList = ["Alice", "Bob", "Charlie", "Diana", "Eve"];


// function checkGuest(name) {
//   const lowerCaseGuestList = guestList.map((guest) => guest.toLowerCase());
//   if (lowerCaseGuestList.includes(name.toLowerCase())) {
//     console.log(`Welcome to the party, ${name}!`);
//   } else {
//     console.log(`Sorry, you're not on the guest list.`);
//   }
// }


// const prompt = require("prompt-sync")();
// const guestName = prompt("Enter your name: ");
// checkGuest(guestName);


// function add(a, b) {
//     return a + b ;
// }

// let add = function (a , b) {
//     return a + b ;
// }

// let add = (a,b) => (a+b)

// let add = (a,b) => { return a+b}

// const result = add(6 , 7);
// console.log(result);

// (function (params) {
//     console.log("Aman");
    
// })();

// function callback() {
//     console.log("Aman is working");
    
// }

// const add = function (a,b, callback) {
//     let result = a + b ;
//     console.log('result:' , result);
//     callback();
    
// }

// add(15 , 21 , function () {
//     console.log("Completed");
    
// })

// add(5,9,() => console.log("Arrow Function"));

//  let fs = require('fs') ;
//  let os = require('os') ;

//  let user = os.userInfo();
//  console.log(user);
//  console.log(user.username);
 
//  fs.appendFile('greeting.txt' , 'Hi ' +  user.username + '!\n' , function () {
//     console.log("file is created");
    
//  })

// const noot = require('./noot')
// var _ = require("lodash");

// console.log("server is available ");

// let age = noot.age;
// const result = noot.addNumber(age , 21)

// console.log(age);
// console.log("Result:" + result);

// const data = ["Anup" ,"Aman" ,"Anand" , "Anand" , 5, 5,1,1]
// let filter = _.uniq(data);
// console.log(filter);


// const jsonString = '{"name" : "Aman" , "age" : 28 , "city" : "Delhi"}'
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject);

const express = require("express");
const app = express();
const db = require("./db")

const bodyParser = require('body-parser');
app.use(bodyParser.json());




app.get("/", function (req, res) {
  res.send("Welcome to my hotel... How i can help you ? ,  we have list of menus");
});

// app.get('/chicken', function (req ,res) {
//     res.send("sure sir , i would love to serve chicken")
// })
// app.get("/Anup", function (req, res) {
//   res.send("Kya re Bare");
// });

// app.get("/idli", function (req, res) {
//   const customized_idli = {
//     name : 'plan idli',
//     size: '12cm diameter',
//     is_sambhar : 'false' ,
//     is_chutney:'true'
    
//   }
//     res.send(customized_idli);
// });

// app.post("/sambar" , function (req , res) {
//   res.send("Nahi denge kya kr loge");
  
// })





// app.post("/person", async (req, res) => {
//   try {
//     const data = req.body;

//     const newPerson = new Person(data);

//     const response = await newPerson.save();
//     console.log("data saved");

//     res.status(200).json(response);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "internal server error" });
//   }
// });


const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes')

app.use('/person' , personRoutes);
app.use('/menuItem' , menuRoutes);


app.listen(3000 , function () {
    console.log("Server is working");
});