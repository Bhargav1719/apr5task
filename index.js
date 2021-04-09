const os = require("os");
const express = require("express")
const fs = require("fs")
var path = require("path")

const app = express()

  let filenames = fs.readdirSync("./")
  console.log(filenames)
app.get("/",(req,res)=>{
var date 
date = new Date 
console.log(date)



 
 fs.writeFile('date-time.txt',date.toString(),(err)=>{
    if(err) throw err;
    console.log("saved")
})  
var textfiles = []
for(i=0;i<filenames.length;i++){
ext=path.extname(filenames[i])
if(ext==".txt"){
textfiles.push(filenames[i])

}
}
res.send(textfiles)
console.log(textfiles)
})


const port =process.env.PORT||3000;
app.listen(port,()=>{console.log(`listening ${port}`)})
