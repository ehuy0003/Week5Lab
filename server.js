let express = require('express');
// used to parse the payload of the incoming requests
let bodyParser = require('body-parser');
let app = express();

let db = [];

// allows Express to understand the urlencodedformat
app.use(bodyParser.urlencoded({
    extended: false
    })
)

// __dirname is the directory name of the current project
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/img"));
app.use(express.static(__dirname + "/css"));

// allows express to render ejs templates
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
    // bodyParser is responsible for generating the body project 
    db.push(req.body)
})

app.get('/listtask', (req,res) => {
    console.log("Display lists of tasks!!!")
    // content of the page generated dynamically
    // copy of the array sent to the rendering engine 
    res.render('listtask.html',{ar:db})
})

app.engine('html', require('ejs').renderFile);
app.set("view engine", "html");
app.listen(8080);