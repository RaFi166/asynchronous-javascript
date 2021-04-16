let constTwo = function(){
    console.log("This is call backTwo function");
}
setTimeout(constTwo,3000);


setTimeout( () => {
    console.log("This is call backTwo function");
}  ,3000)