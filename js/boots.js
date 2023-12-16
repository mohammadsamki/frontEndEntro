var eye = document.getElementById('eye');
var password = document.getElementById('form3Example4');
var firstName = document.getElementById('form3Example1');
var lastName = document.getElementById('form3Example2');
var email = document.getElementById('form3Example3');

var registerForm = document.getElementById('registerForm');
function showPassword() {
    // password.type='text';
    if (password.type === 'password') {
        password.type = 'text';
        eye.src='../media/eyeclose2.png';
    } else {
        password.type = 'password';
        eye.src='../media/eye.png';
        
    
    }
}

//  obj > keys, Value
//  user1 ={fistname:'value,lastname:'value,email:'value',password:'value'};

eye.addEventListener('click',showPassword)


// e > event
registerForm.addEventListener('submit',function(e){
    e.preventDefault();
    
    var user ={
        firstName: firstName.value,
        lastname:lastName.value,
        email:email.value,
        password:password.value
    }
    //  localStorage > set > add new key and value
    //  get > call key value 
    localStorage.setItem('user1',JSON.stringify(user));
    //  j s Object nation
});