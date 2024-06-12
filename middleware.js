const express=require('express');

const app=express();
const PORT = 3001;

const loged=(req,res,next)=>{
    console.log("successfully logged in");
    next();
}
const signed=(req,res,next)=>{
    console.log("successfully signed in");
    next();
}
app.use(loged);
app.use(signed)

app.get('/',loged,(req,res)=>{
    res.send("hello world");
});
app.get('/hi',(req,res)=>{
    res.send("hi world");   
});
app.get('/signin',signed,(req,res)=>{
    res.send("welcome");
})

app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);
}
);