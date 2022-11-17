import users from "./userData.js";

const loginBtn = document.querySelector('.login-btn');
loginBtn.onclick = () => {
    let count = 0;
    const username = document.querySelector('.username').value;
    const password = document.querySelector('.password').value;
    users.forEach(user => {
        if(user.username == username && user.password == password) {
            alert("Login Successfully");
        }
        else count++;
    });
    if(count == users.length) alert("Login Failed");
}
