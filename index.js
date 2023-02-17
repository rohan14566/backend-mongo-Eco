const express=require("express")

const homeRouter=require("./routes/home")
const ipadRouter=require("./routes/ipad")
const iphoneRouter=require("./routes/iphone")
const macbookRouter=require("./routes/macbook")
const accesoriesRouter=require('./routes/accesories')
const cors=require('cors')
const app=express();


app.use(cors());

app.use(homeRouter);
app.use(ipadRouter);
app.use(iphoneRouter);
app.use(macbookRouter);
app.use(accesoriesRouter);



app.listen(5000,function(){
    console.log("server is started");
});