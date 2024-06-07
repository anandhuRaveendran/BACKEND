async function fetchWeather(url){
    try{
        const response= await fetch(url)
        const result= await response.json()
        console.log(result)
    }
    catch(error){
    console.log(error)
    }
    finally{
    console.log("thank you")
    }
    }
    fetchWeather("https://rickandmortyapi.com/api/character")