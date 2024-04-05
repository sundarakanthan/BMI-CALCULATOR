const express = require("express")
const app = express();

const bodyParser =  require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

app.get("/bmicalculator",function(req,res){

    res.sendFile(__dirname+'/index.html')


})

//post 
app.post("/bmicalculator",function(req,res){
   
  let heightCm = parseFloat(req.body.height);
  let weight =  parseFloat(req.body.weight);

  //Converting Centimeter to Meter
  let height = heightCm / 100;

  let bmi = weight / (height * height);

  res.send("Your BMI is: " +bmi);
})


app.listen(3000,function(){
    console.log("Server started...");
})