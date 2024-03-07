import express from "express";
const app= express();
const port =3000;

app.use(express.jason());

app.listen(port,()=>{
    console.log(`server is listening to ${port}`)
});