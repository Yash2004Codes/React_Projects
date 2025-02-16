const button = document.querySelector("#subscribe");
const box = document.querySelector("#myCheckBox");
const email = document.querySelector("#myemail");
const toggle = document.querySelector("#toggle");
const body = document.querySelector("#mybody");
const link = document.querySelector("#mylink");

button.addEventListener("click", validateInput);

toggle.addEventListener("click",changeMode);

function changeMode(){

    if(body.style.backgroundColor== 'black'){
        body.style.backgroundColor='white';
        toggle.src='darkMode.png';
        mylink.href='index.css';
    }
    else{
        body.style.backgroundColor='black';
        toggle.src='lightMode.png';
        mylink.href='dark.css';
    }

}


function validateInput(event){
event.preventDefault();

// check if email is entered or not
if(!email.value)
{
window.alert("Plz enter Email !");

}
// check if checkbox is clicked or not
else if(!box.checked)
{
window.alert("Plz agree to aur terms and conditions !");
}
else
window.alert("success !");
}
