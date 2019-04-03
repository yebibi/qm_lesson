const fs = require('fs');
const path = require('path');
// fs.readFile(path.join(__dirname,'./1.txt'),'utf-8',(err,dataStr)=>{
//   if(err) throw err
//   console.log(dataStr)
// })
function getFileBypath(fpath,callback){
  fs.readFile(fpath, 'utf-8', (err, dataStr) => {
    if (err) throw err
    callback(dataStr)
  })
}
getFileBypath(path.join(__dirname, './1.txt'),(dataStr)=>{
  console.log(dataStr);
  
})