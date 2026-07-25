document.getElementById("registerForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name=document.getElementById("name").value;

    let email=document.getElementById("email").value;

    let phone=document.getElementById("phone").value;

    let password=document.getElementById("password").value;

    let confirmPassword=document.getElementById("confirmPassword").value;

    if(password!==confirmPassword){

        alert("Passwords do not match!");

        return;

    }

    let user={

        name:name,

        email:email,

        phone:phone,

        password:password

    };

    localStorage.setItem("user",JSON.stringify(user));

    alert("Registration Successful!");

    window.location.href="login.html";

});