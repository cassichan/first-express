//Import express library
import express from "express";

//Initialize express server
const app = express();
//Tell express to accept data when sent to it in JSON format
app.use(express.json());

//List requests that we want express to respond to
app.get("/hello", (request, response) => {
  //do something..ex: send response back through port
  console.log("xxxxHello Worldxxxx"); //Just to api, not browser
  response.send("Hello World!"); // to browser. -> status 200 implied
  //if you want to specify a status, include .status(). do this if not status 200
});

//Array of objects (students). usually would be in DB or another file
const students = [
  {
    firstName: "Jonathan",
    lastName: "Vegas",
  },
  {
    firstName: "Bridgette",
    lastName: "Lemus",
  },
  {
    firstName: "Mason",
    lastName: "Madaras",
  },
  {
    firstName: "Logan",
    lastName: "McCalley",
  },
];
//Get students. Converts students to JSON. if want to be explicit: response.json
app.get("/students", (request, response) => {
  response.send(students);
});

//students/Mason              :fName is the url parameter/ name is arbitrary
app.get("/students/:fName", (request, response) => {
  // (stud.firstName = single students firstName) that matches the request param firstName (fName)
  const student = students.find(
    (stud) => stud.firstName === request.params.fName
  ); //stud name is arbitrary
  //Generate response and send message back if student not found/success is false
  if (!student) {
    response.status(404).send({ message: "Student not found", success: false });
    return;
  }

  response.send(student);
}); //Good practice to include error as the if in the if statement

//get a new student
app.post("/students", (request, response) => {
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
app.get('states/:stateName', returnStateByName)
app.get('states/:stateName', (req, res) => {returnStateByName (req, res)})

//Start listening on a port. Give it a port and a callback that says what to do once listened to that port

app.listen(3001, () => {
  console.log("Now listening on port 3001");
});
