let p  = new Promise(function(resolve, reject){
    let result = 1+1;
    if(result == 2){
        resolve("success");
    } else{
        reject("failed");
    }
});

p.then(function(message){
console.log("this is the then " + message);
})

.catch((message)=>{
    console.log(`this is catch $(message)`);
})











