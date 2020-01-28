//First request section
var xhr = new XMLHttpRequest()

xhr.open('GET','Json-Files/data.json',true);
xhr.responseText = 'text'
xhr.send();

xhr.onload = () => {
    if(xhr.status === 200){
        var myObject = JSON.parse(xhr.responseText)
        console.log(myObject)
        console.log(myObject[1].name, myObject[1].surname)
    }else{
        console.error("ERROR DEFINATION: There is a mistake here.")
    }
}
//Second request section
var xhr2 = new XMLHttpRequest()

xhr2.open('GET','Json-Files/NBA-Players.json',true);
xhr2.responseText = 'text'
xhr2.send();

xhr2.onload = () => {
    if(xhr2.status === 200){
        var basketballPlayers = JSON.parse(xhr2.responseText)
        allMyPlayers = "";
        for (let index = 0; index < basketballPlayers.guards.length; index++) {
            //console.log("All NBA Guards ", index , " = ", basketballPlayers.guards[index].fullName)
            let playerName = "<br> Player Name: ";
            allMyPlayers += playerName + basketballPlayers.guards[index].fullName;  
        }console.log(allMyPlayers)
        document.getElementById('messages').innerHTML = allMyPlayers;
    }else{
        console.error("ERROR DEFINATION: There is a mistake here.")
    }
}

//Hospitality request section
let hotelInfo;
let details;
let xhr3 = new XMLHttpRequest()
xhr3.open('GET','Json-Files/Hospitality.json',true);
xhr3.responseText = 'text';
xhr3.send()

xhr3.onload = () =>{
    if (xhr3.status === 200){
        hotelInfo = JSON.parse(xhr3.responseText)
        console.log(hotelInfo)
        display(0)
    }
}

let display = function (x){
    console.log(x)
    document.getElementById('roomName').innerHTML = hotelInfo[x].name;
    document.getElementById('desc').innerHTML = hotelInfo[x].description;
    document.getElementById('photo').src = hotelInfo[x].photo;
    document.getElementById('weekday').innerHTML = hotelInfo[x].cost.weekday;
    document.getElementById('weekend').innerHTML = hotelInfo[x].cost.weekend;
    details = "";
    for(i=0;i<hotelInfo[x].details.length;i++){
        console.log('details : ',hotelInfo[x].details[i])
        details += "<p>" + hotelInfo[x].details[i] + "</p>";
    }
    document.getElementById('details').innerHTML = details ;
}
