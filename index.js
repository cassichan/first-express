//Import express library
import express from 'express';

//Iniatalize express server
const app = express();
//Tell express to accept data when sent to it in JSON format
app.use(express.json());

//List requests that we want express to respond to
//If too many functions/routes, put functions elsewhere so code is neater.
app.get('/hello', (request, response) => {
  //do something..ex: send response back through port
  console.log('xxxxHello Worldxxxx'); //Just to api, not browser
  response.send('Hello World!');
  //if you want to specify a status, include .status(). do this if not status 200
  //response.send('Hello World!')  -> status 200 implied
});

//Array of objects (students). usually would be in DB or another file
const students = [
  {
    firstName: 'Jonathan',
    lastName: 'Vegas',
  },
  {
    firstName: 'Bridgette',
    lastName: 'Lemus',
  },
  {
    firstName: 'Mason',
    lastName: 'Madaras',
  },
  {
    firstName: 'Logan',
    lastName: 'McCalley',
  },
];

app.get('/students', (request, response) => {
  response.send(students); //Converts students to JSON. if want to be explicit: response.json
});

app.get('/students/:fName', (request, response) => {
    //Calling .find to return one student's first name in the array (stud = one element of students array. stud.firstName = single students firstName) that matches the request param firstName (fName). set to variable student
    const student = students.find(stud => stud.firstName === request.params.fName)    
     //Generate response and send message back if student not found/success is false
    if(!student) {
        response.status(404).send({message: 'Student not found', success: false});
        return;
    }
   
    response.send(student);
}); //Good practice to include error as the if in the if statement


//Make post request to students- add new student and return new student array
app.post('/students', (request, response) => {
    const newStudent = request.body;
    students.push(newStudent);
    response.status(201).send(students);
});

//Run Postman
//Get request localhost:3001/students
//Change to POST
//Select raw
//Text: select JSON
//Write in JSON
//Hit send



//Assuming created function called returnStateByName
// app.get('states/:stateName', returnStateByName)
// app.get('states/:stateName', (req, res) => {returnStateByName (req, res)};

//Start listening on a port. Give it a port and a callback to code what to do once listened to that port

app.listen(3001, () => {
  console.log('Now listening on port 3001');
});
