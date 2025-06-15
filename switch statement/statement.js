function btnPressed(){
    var weatherSelected = document.getElementById('weather').value;
    var advice;
    
    switch(weatherSelected){
        case "sunny":
            advice = " : Wear your sunglasses";
            break;
        case "windy":
            advice = " : Wear warm clothes";
            break;
        case "rainy":
            advice = " : Wear your rain coat";
            break;
        case "snowy":
            advice = " : Wear your snow clothes";
            break;
        case "cloudy":
            advice = " : Be aware of anything";
            break;
    }
    document.getElementById('outputText').innerHTML = "Weather advice" + advice;
}