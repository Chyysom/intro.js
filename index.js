

const express = require('express');  //imports express into this file i installed,
// now i'm using it//
const app = express(); // create server (my api) app is my main backend//

//app.get('/', (req, res) => { 
   // res.send('My Week 2 API!')
//});  // app.get ()means when someone visits the url '/'.... homepage(root)
    //((req, res): req=request,what user sends, res=response;what i send back)
    //res.send(): send response back
    
app.get('/books', (req, res) => { 
    res.json([
        { tittle: 'Atomic Habits' },
        { tittle: 'Rich Dad Poor Dad' }
]);
}); // /Books new route 
    // res.json()n send data as JSON(Very important as APIS)

app.listen(3000, () => {
    console.log('server running on port 3000');
});  // 3000= port(like a door number, server runs at http://localhost:3000)

app.arguments(express.json());

app.post('/user', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    res.send('Hello, ${name}');
});

const PORT = ProcessingInstruction.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('sever running on port $ {PORT}');
});

express.static('public')

console.log( 'hello, world')

