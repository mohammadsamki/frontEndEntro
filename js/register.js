    var userName = document.getElementById('form3Example1c');
    var email = document.getElementById('form3Example3c');
    var password = document.getElementById('form3Example4c');

    var registerForm = document.getElementById('registerForm');
    var allUsers = JSON.parse(localStorage.getItem('user')) || [];

    registerForm.addEventListener('submit',function(event){
        event.preventDefault();
        console.log('before click',allUsers)

        var user ={
            name:userName.value,
            email:email.value,
            password:password.value
        }
        
        allUsers.push(user);
        console.log(allUsers);
        
        //  save to local storage
        
        localStorage.setItem('user',JSON.stringify(allUsers));
        console.log('after click',allUsers)

    })

    // user1={name:'ahmad',email:'ahmad@gmail.com',password:123}
    // user2={name:'ali',email:'ali@gmail.com',password:123}

    // allUsers =[user1,user2]