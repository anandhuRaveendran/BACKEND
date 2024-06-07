let promise= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('New update')
    },10000);
});

async function asynchCheck(){
    let result = await promise;
    console.log(result)
    console.log('hello')
}
asynchCheck()