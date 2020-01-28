/* fetch('js/Movies-Data.json')
    .then((response) => {
        return response
    })
    .then((myJson) => {
        console.log(myJson)
        console.log(myJson.status)
    })
 */

let xhr = new XMLHttpRequest();
xhr.open('GET','js/Movies-Data.json',true);
xhr.send();

xhr.onreadystatechange = () => {
    console.log(xhr.readyState);
    console.log(xhr.status);
    console.log(xhr.statusText);
}
xhr.onload = () => {
    if(xhr.status === 200){
        let myStuff = JSON.parse(xhr.responseText)
        console.log(myStuff)
    }else{
        console.error("ERROR DEFINATION: There is a mistake here.")
    }
}