// import express from "express"
// const app = express();
// const Router = express.Router();
// Router.get("/products",(req,res) => {
//     res.send("Hello World!");
// });

// app.use("/",Router);
// app.listen(7070,() => console.log("http://localhost:7070/products"));

import express from "express"
const app = express();
const productRouter = express.Router();
const userRouter = express.Router();

productRouter.get("/list",(req,res) => {
    res.send("Product List!");
});

userRouter.get("/list",(req,res) => {
    res.send("User List!")
});

app.use("/products",productRouter)
app.use("/users",userRouter)

app.listen(7070,() => console.log("http://localhost:7070"));