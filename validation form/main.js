const usernameInput = document.querySelector(".user-input");
const passwordInput = document.querySelector(".pass-input");
const usernameMsg = document.querySelector(".username-msg");
const passwordMsg = document.querySelector(".password-msg");
const sigininMsg = document.querySelector(".signin-status");
const siginBtn = document.querySelector(".signin-button");

siginBtn.addEventListener("click", signIn);

function signIn(event) {
    event.preventDefault();
    usernameMsg.innerText = "";
    passwordMsg.innerText = "";
    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;
    let ifSendData = true;
    const regexuser = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const regexpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/ 

    if (usernameValue.length === 0) {
        usernameMsg.innerText = "Please enter an Email";
        ifSendData = false;
    }else if (!regexuser.test(usernameValue)){
        usernameMsg.innerText = "Please enter a valid Email";
        ifSendData = false;
    }

    if (passwordValue.length === 0) {
        passwordMsg.innerText = "Please enter your password";
        ifSendData = false;
    } else if (!regexpass.test(passwordValue)) {
        passwordMsg.innerText = "Please choose a safe password";
        ifSendData = false;
    }

    if (ifSendData) {
        const body = JSON.stringify({
            username: usernameValue,
            password: passwordValue,
        })
        const headers = {
            "Content-Type": "application/json"
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: body,
            headers: headers
        })
            .then(response => {
                if(response.ok) {
                    sigininMsg.innerText = "You signed in successfully"
                }
            })
    }
}