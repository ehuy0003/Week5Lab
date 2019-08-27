let express = require('express');
let bodyParser = require('body-parser');

let app = express();

let db = [];

app.use(bodyParser.urlencoded({
    extended: false
    })
)

app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/img"));
app.use(express.static(__dirname + "/css"));


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');



app.get('/', (req,res) => {
    console.log('Welcome to my ToDo Application!!!')
    res.render('index.html')
})

app.get('/newtask', (req,res) => {
    console.log("New task being added!!!")
    res.render('newtask.html')
})

app.post('/newtask', (req, res) => {
    console.log('POST recieved')
    res.render('index.html')
    db.push(req.body)
})

app.get('/listtask', (req,res) => {
    console.log("Display lists of tasks!!!")
    res.render('listtask.html',{ar:db})
})

app.engine('html', require('ejs').renderFile);
app.set("view engine", "html");
app.listen(8080);