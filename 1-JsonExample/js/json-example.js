/* Parse and Stringify */
var personIdentification = '{"name":"Okan","surname":"TOPER","age":25}'

var personJson = JSON.parse(personIdentification) // parse ile string ifadeyi Json objesine dönüştürüyoruz

console.log(personJson)

var personString = JSON.stringify(personJson) // stringfy ile json objesini string ifadeye  dönüştürüyoruz

console.log(personString)

/* Show in HTML object values */

var personOnur = '{"name":"Onur","surname":"TOPER","age":30}'

var onur = JSON.parse(personOnur) // parse ile string ifadeyi Json objesine dönüştürüyoruz

console.log(onur)

document.getElementById('name').innerHTML = onur.name; //id'si name olan html'in içerisini objenin içerisindeki name alanını gömdük
document.getElementById('surname').innerHTML = onur.surname;
document.getElementById('age').innerHTML = onur.age; 

/* Double level JSON data */

var personData = '{"Gürbüz":{"yas":"60","meslek":"Emekli İnşaat Ustası"},"Zübeyde":{"yas":"50","meslek":"Esnaf"}}'
var personFamily = JSON.parse(personData);
console.log(personFamily, '---',personFamily.Gürbüz,'---', personFamily.Gürbüz.meslek)