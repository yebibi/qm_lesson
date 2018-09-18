const chior=[];//乐队 

// 只有会嘎嘎叫的才要 chedk?
//代码 流程 组成乐队 办事流程 
// 嘎嘎叫
var duck = {
    duckSing:function(){
        console.log('嘎嘎嘎');
    }
};
// js 动态类型语言
var chicken={
    chicksing:function(){
        console.log('咯咯咯');
    },
    duckSing:function(){
         console.log('嘎嘎嘎');
    }
};

// 如果它走起路来像鸭子，叫起来也是鸭子，那么它就是鸭子，duck typing js弱类型

// 1000要求，999只duck
// for(var i=0;i<999;i++){
//     if(typeof duck.duckSing === 'function')
//     {
//         chior.push(duck);
//     }
// }
/*功能：加入合唱团
params:animal 动物对象
chior 加入新成员
*/
function joinChior(animal){
     if(animal && typeof animal.duckSing==='function'){
        chior.push(animal);
        
    }
    // else
    // {
    //     console.log('不好意思，这活您来不了');
    // }
    

}
// 函数式编程，将编程目的分成一个或多个函数，取代逐行式编程，将流程式开发，函数式，完成封装
for(var i=0;i<999;i++){
    joinChior(duck);
}
//现学
chicken.duckSing = function(){
    console.log('嘎嘎嘎');
}

joinChior(chicken);
console.log(chior.length);
// 只有999只鸭子




