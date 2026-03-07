import express from "express"
import session from "express-session"
import expressLayouts from "express-ejs-layouts"
const app = express();

app.use(expressLayouts)
// app.use(express.static("public"))
app.use(express.static("../public"))

app.set("view engine","ejs")
app.set("views","views")
app.set("layout","layout")

app.listen(9090,()=>console.log("Server Started"));

app.use(express.urlencoded({extended: true}));

app.use(
    session({
        secret : "mySecretKey",//recommneded to save it in env file
        resave : false,
        saveUninitialized: false
    })
)
let usersD = [
    {name:"Abbas",email:"abbas5510@gmail.com",password:"5510"},
    {name:"Teja",email:"Teja167@gmail.com",password:"167"},
    {name:"Shanmukha",email:"shanu5510@gmail.com",password:"shanu"},
    {name:"dd",email:"dd@gmail.com",password:"dd"},

];

app.get("/login",(req,res) => {
    res.render("login",{error:null});
});
// Post method for login
app.post("/login",(req,res)=>{
    // res.redirect("/")//Redirecting to Dashboard Page
    const { email,password }  = req.body;
    const user = usersD.find((user) => user.email===email);
    if(user){
        if(user.password===password){
            req.session.user = user;//Session id is Created, can be checked in the browser application cookies
            res.redirect("/")
        }
        else{
            // res.redirect("/login")
            res.render("login",{error:"Invalid Password"})
        }
    }
    else{
        res.render("login",{error:"User Not Found!"});
    }

})

app.get("/register",(req,res) => {
    res.render("register")
})
// Post method for Register
app.post("/register",(req,res) =>{
    const {name,email,password} = req.body;
    let n = usersD.length
    usersD = [...usersD,
        {name,email,password}
    ];
    res.redirect("/login")
})

app.get("/",(req,res) => {
    if(req.session.user){
        res.render("dashboard",{usersD})
    }
    else{
        res.render("login",{error:null})
    }
})
app.get("/users",(req,res) => {
    res.render("users",{usersD})
})

