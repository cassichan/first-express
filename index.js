//Import express library
import express from 'express';

//Iniatalize express server
const app = express();

//List requests that we want express to respond to
//If too many functions/routes, put functions elsewhere so code is neater.
app.get('/hello', (request, response) => {
    //do something..
    response.status(200).send('Hello World!'); 
    //if you want to specify what to do with specific status, include .status()
    //response.send('Hello World!')  -> status 200 implied
})


//Start listening on a port. Give it a port and a callback to code what to do once listened to that port

app.listen(3001, () => {
    console.log('Now listening on port 3001');
});