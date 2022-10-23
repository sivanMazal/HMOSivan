const cors=require("cors");
const express=require("express");
const bodyparser=require("body-parser");


const {userRouter}=require("./routers/userRouter");
const {recoveryRouter}=require("./routers/recoveryRouter");
const {vaccinationRouter}=require("./routers/vaccinationRouter");

const {mysqlConnection}=require("./sql");

const app=express();
app.use(cors());
app.use(bodyparser.json()); 

app.use("/users",userRouter);
app.use("/vaccination",vaccinationRouter);
app.use("/recovery",recoveryRouter);

const port=8080;

mysqlConnection.connect((err) => {
    if (!err)
        console.log('Connection Established Successfully');
    else
        console.log('Connection Failed!', err);
});

app.listen(port,()=>{console.log("running server")});