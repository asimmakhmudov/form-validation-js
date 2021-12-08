const username = document.getElementById('user');
const surname = document.getElementById('usersur');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const form = document.getElementById('form');
const email = document.getElementById('useremail');
let bcolor = document.getElementsByClassName('bcolor');
let alertname = document.getElementById('alertname');
let alertsur = document.getElementById('alertsurname');
let alertemail = document.getElementById('alertemail');
let alertpass1 = document.getElementById('alertpass1');
let alertpass2 = document.getElementById('alertpass2');

form.addEventListener('submit', (e) =>{
    if(username.value === '' || username.value == null) {
        alertname.innerHTML = '<img src="images/checkedred.png" style="transition: 400ms;" alt="red">'
        e.preventDefault()    
    }
    else {
        e.preventDefault()
        alertname.innerHTML = '<img src="images/checkedgreen.png" style="transition: 400ms;" alt="green">'
    }
    if( surname.value === '' || surname.value == null){
        alertsur.innerHTML = '<img src="images/checkedred.png" style="transition: 400ms;" alt="red">'
        e.preventDefault()
    }
    else {
        alertsur.innerHTML = '<img src="images/checkedgreen.png" style="transition: 400ms;" alt="green">'
        e.preventDefault()
    }
    if( email.value === '' || email.value == null) {
        alertemail.innerHTML = '<img src="images/checkedred.png" style="transition: 400ms;" alt="red">'
        
        e.preventDefault()
    }
    else {
        alertemail.innerHTML = '<img src="images/checkedgreen.png" style="transition: 400ms;" alt="green">'
        
        e.preventDefault()
    }
    if(password1.value.length <= 4 || password1.value.length == null) {
        alertpass1.innerHTML = '<img src="images/checkedred.png" style="transition: 400ms;" alt="red"><span> Greater than 4 requiered</span>'
        e.preventDefault()
    }
    else{
        alertpass1.innerHTML = '<img src="images/checkedgreen.png" style="transition: 400ms;" alt="green">'
        e.preventDefault()
    }
    if(password2.value.length <= 4  || password2 === password1 || password1.value.length == null) {
        alertpass2.innerHTML = '<img src="images/checkedred.png" style="transition: 400ms;" alt="red">'
        e.preventDefault()
    }
    else{
        alertpass2.innerHTML = '<img src="images/checkedgreen.png" style="transition: 400ms;" alt="green">'
        e.preventDefault()
    }
})