const fs = require('fs');
const path = require('path');
// fs.readFile(path.join(__dirname,'./1.txt'),'utf-8',(err,dataStr)=>{
//   if(err) throw err
//   console.log(dataStr)
// })
function getFileBypath(fpath, succsessCb,errCb) {
  fs.readFile(fpath, 'utf-8', (err, dataStr) => {
    if (err) return errCb(err)
    succsessCb(dataStr)
  })
}
getFileBypath(path.join(__dirname, './1.txt'), function(data){
  console.log(data);
  
},function(err){
  console.log(err);
  
})