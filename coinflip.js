function flip(coinFlip){
    console.log("Result:")
    setTimeout(coinFlip,1000);
       
}
function coinFlip(){
    let coin=Math.random()
    if(coin<0.5){
        console.log("head")
    }
    else{
        console.log("tail")
    }
}

flip(coinFlip)