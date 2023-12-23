    var userName = document.getElementById('form3Example1c');
    var email = document.getElementById('form3Example3c');
    var password = document.getElementById('form3Example4c');

    var registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit',function(event){
        event.preventDefault();

        var user ={
            name:userName.value,
            email:email.value,
            password:password.value
        }
        //  save to local storage
        localStorage.setItem('user',JSON.stringify(user));
    })