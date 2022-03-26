const signInForm = document.getElementById('signInForm');

signInForm.addEventListener('submit', onSignInSubmit);

let cooky = document.cookie;
console.log(cooky);


function onSignInSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    console.log(email);
    console.log(pass);
    let creds = cooky.split(':');
    if (creds.length == 5 && creds[3] === email && creds[4] === pass){
        alert(`Hi ${creds[0].split('=')[1]}, you logged in successfully.`);
    }
    else{
        alert("Invalid email or password");
    }
        
}
