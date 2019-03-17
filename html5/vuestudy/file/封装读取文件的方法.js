const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname,'./1.txt'),'utf-8',(err,datastr)=>{
   if(err) throw err
   console.log(datastr);
   
})