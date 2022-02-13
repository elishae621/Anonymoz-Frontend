// Title: Script code for AnonyMuz web app
// Aim: For Friendly user-interractive AnonyMuz web app 
// Technology: Javascript / JQuery
//Copyright: AnonyMuz Team 2022

 
//  Code for home/registration page

//registration

// get values from registration form
var username = document.getElementById("inputUsername"),
messageForm = document.getElementById("messageForm"),
psword1 = document.getElementById("inputPassword1"),
profileName = document.getElementById("profileName"),
place = document.getElementById("place"),
checkbox = document.getElementById("inputCheckbox");

// Creates user page when form is submitted
function sub() {
    var myName = username.value;
    localStorage.setItem("textvalue", myName);
    return false;
    
}
profileName.innerHTML = localStorage.getItem("textvalue");


// this code copies the muz-link to user clipboard
function copyMuzlink(){
    var copylink = document.getElementById("muz-link");
    copylink.select();
    navigator.clipboard.writeText(copylink.value);
}
