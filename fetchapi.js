
fetch('data/firstdata.json') .then(function(resolve){
    // console.log("success", resolve );
    return resolve.json();
    
}) .then((data)=> {
    console.log(data);
})
 .catch(function(err){
    console.log("rejected", err);
});