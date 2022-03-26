// function checkCred(){
//     const email = document.forms['signInForm']['email'].value;
//     const password = document.getElementById("password").textContent;
//     document.cookie = `session=${email}:${password}`;
//     document.getElementById("result").innerHTML = email + ':' + password;
//     console.log(email + ':' + password);
//     console.log("Test");
//     setTimeout(10000);

// }
const signUpForm = document.getElementById("signUpForm");
signUpForm.addEventListener('submit', onSignUpSubmit)

function onSignUpSubmit(e) {
    e.preventDefault();
    const fname = document.getElementById('firstName').value;
    const lname = document.getElementById('lastName').value;
    const uname = document.getElementById('userName').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    // console.log(fname);
    // console.log(lname);
    // console.log(uname);
    // console.log(email);
    // console.log(pass);
    document.cookie = `session=${fname}:${lname}:${uname}:${email}:${pass}`;
    alert("Now you have account, Try Sign IN.")
    // document.cookie = "username=John Doe";
    // console.log(document.cookie['usernmae'])

    // console.log("ddddd");

}
