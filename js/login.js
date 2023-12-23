var email = document.getElementById('typeEmailX');
var password = document.getElementById('typePasswordX');

var submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(email.value);
    console.log(password.value);
    
    var user =localStorage.getItem('user');
    user = JSON.parse(user);
    console.log(user['email']);
    if(user['email']==email.value && user['password']==password.value) {
        alert('Login Successful');
        window.location.href = 'index.html';
    }
    else {
        alert('Login Failed email or password is incorrect');
    }
}
)