async function fetchWeather(url){
try{
    const response= await fetch(url)
    const result= await response.json()
    // console.log(result)
    let temp=result.main.temp;
    let city=result.name;
 
    let condition =result.weather["description"];
    console.log("temperature in "+city+":",temp)
    // console.log("Current Weather is "+w_condition+" and mostly "+condition)
}
catch(error){
console.log(error)
}
finally{
console.log("thank you")
}
}
fetchWeather("https://api.openweathermap.org/data/2.5/weather?lat=9.9399&lon=76.2602&appid=5137c927d91a750e250434cd7070ed4e&units=metric")