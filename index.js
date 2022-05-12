const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const users = [
    {id:1, name:'Sabana1', email:'sabana1@gmail.com', phone: '017888888'},
    {id:2, name:'Sabana2', email:'sabana2@gmail.com', phone: '017888888'},
    {id:3, name:'Sabana3', email:'sabana3@gmail.com', phone: '017888888'},
    {id:4, name:'Sabana4', email:'sabana4@gmail.com', phone: '017888888'},
    {id:5, name:'Sabana5', email:'sabana5@gmail.com', phone: '017888888'},
    {id:6, name:'Sabana6', email:'sabana6@gmail.com', phone: '017888888'},
    {id:7, name:'Sabana7', email:'sabana7@gmail.com', phone: '017888888'},
];

// call cors for access client site server [get data from server site (mane ai site theke data jno fontend e pete pare tar jonno cors function k call kora holo)]
app.use(cors());

// for json parse problem [request.body = undefine]
app.use(express.json());

app.get('/', (req, res) => {
    res.send(users);
});

// get user search using query 
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        const matched = user.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(matched);
    }
})

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.post('/userInfo', (req, res) => {
    console.log('request', req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
