let response=fetch('https://jsonplaceholder.typicode.com/todos/14')

async function asynchCheck(){
    let res = await response;
    let result=await res.json();
    console.log(result)

}
asynchCheck()