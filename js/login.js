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
    var isValid =false;
    for(var i=0;i<user.length;i++){
        if(user[i]['email']==email.value && user[i]['password']==password.value) {
            alert('Login Successful')
            window.location.href = 'index.html';
            isValid = true;
        }
       
    }
    if(isValid==false){
        alert('Login Failed email or password is incorrect');
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "email or pass are in correct!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
            var incorrect = document.getElementById('incorrect');
            incorrect.style.display = 'block';
    }
    
    
}
)