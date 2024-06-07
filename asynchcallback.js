function greeetAsync(name, callback) {
    console.log("Hello,"+ name);
   
    setTimeout(function() 
    {
        callback(5,3)
    } , 3000);
    
    console.log("Before callback")
}

function mul(a,b){
    // let a=10; let b=5;
    let c = a*b;
    console.log("Result is:",c);
}

greeetAsync("Multiplication",mul);
