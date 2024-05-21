// Task 1: Hello World Program
// hello-world.js
console.log("HELLO WORLD");

// Task 2: Create a Server
// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

// Task 3: File System Operations
// file-operations.js
const fs = require('fs');

// Write "Hello Node" to welcome.txt
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File has been created');
  
  // Read data from hello.txt
  fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});

// Task 4: Password Generator
npm install generate-password

// Then, create the program:
// password-generator.js
const generatePassword = require('generate-password');

const password = generatePassword.generate({
  length: 10,
  numbers: true
});

console.log(password);

// Task 5: Email Sender

npm install nodemailer

// Then, create the program:
// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

// Setup email data
let mailOptions = {
  from: 'your-email@gmail.com',
  to: 'your-email@gmail.com',
  subject: 'Hello from Node.js',
  text: 'Hello Node.js'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});



