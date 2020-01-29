/*jslint browser:true */
'use strict';

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;

// GET THE CONDITIONS
weatherConditions.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=09000,tr&appid=74a6eb650ecde3846b95dcb2d5b58909&units=imperial', true);
weatherConditions.responseType = 'text';
weatherConditions.send(null);

weatherConditions.onload = function() {
    if (weatherConditions.status === 200){
        cObj = JSON.parse(weatherConditions.responseText); 
        console.log(cObj);
        document.getElementById('location').innerHTML=cObj.name;
        document.getElementById('weather').innerHTML=cObj.weather[0].main;
        document.getElementById('temperature').innerHTML=cObj.main.temp;
        document.getElementById('desc').innerHTML=cObj.weather[0].description.toUpperCase();


    } //end if
}; //end function










// GET THE FORECARST
weatherForecast.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?zip=09000,tr&appid=74a6eb650ecde3846b95dcb2d5b58909&units=imperial', true);
weatherForecast.responseType = 'text'; 
weatherForecast.send();

weatherForecast.onload = function() {
if (weatherForecast.status === 200){
	fObj = JSON.parse(weatherForecast.responseText);
    console.log(fObj);

    var dateRaw = fObj.list[0].dt_txt.substring(0,11);
    document.getElementById('r1c1').innerHTML=dateRaw;

    var iconCode = fObj.list[0].weather[0].icon;
    var iconPath = "http://openweathermap.org/img/w/"+iconCode+".png";
    document.getElementById('r1c2').src = iconPath;
    document.getElementById('r1c3').innerHTML = fObj.list[0].main.temp_min+"&deg";
    document.getElementById('r1c4').innerHTML = fObj.list[0].main.temp_max+"&deg";
   
   
    var dateRaw = fObj.list[8].dt_txt.substring(0,11);
    document.getElementById('r2c1').innerHTML=dateRaw;

    var iconCode = fObj.list[8].weather[0].icon;
    var iconPath = "http://openweathermap.org/img/w/"+iconCode+".png";
    document.getElementById('r2c2').src = iconPath;
    document.getElementById('r2c3').innerHTML = fObj.list[8].main.temp_min+"&deg";
    document.getElementById('r2c4').innerHTML = fObj.list[8].main.temp_max+"&deg";

	
    var dateRaw = fObj.list[16].dt_txt.substring(0,11);
    document.getElementById('r3c1').innerHTML=dateRaw;

    var iconCode = fObj.list[16].weather[0].icon;
    var iconPath = "http://openweathermap.org/img/w/"+iconCode+".png";
    document.getElementById('r3c2').src = iconPath;
    document.getElementById('r3c3').innerHTML = fObj.list[16].main.temp_min+"&deg";
    document.getElementById('r3c4').innerHTML = fObj.list[16].main.temp_max+"&deg";

	
} //end if
}; //end function


