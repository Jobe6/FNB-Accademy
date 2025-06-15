const validUsername = "Athenkosi";
const validPassword = "079424"

document.getElementById("login").addEventListener('submit', function(event){
    event.preventDefault();

    const username = document.getElementById('userInput').value;
    const userpassword = document.getElementById('passInput').value;
    const message = document.getElementById('message');

    if(username == validUsername && userpassword == validPassword){
        message.style.color = 'green';
        message.textContent = 'Log in successful!!!!';
    }
    else{
        message.style.color = 'red';
        message.textContent = 'Incorrect input details!!'
    }
})