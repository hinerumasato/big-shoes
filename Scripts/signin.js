import users from './userData.js';
import { pushUsers } from './userData.js'


const signinBtn = document.querySelector('.signin-btn');

signinBtn.onclick = () => {

    alert("CLICK")
    
    let isUsed = false;
    const username = document.querySelector('.username').value;
    const password = document.querySelector('.password').value;

    users.forEach(user => {
        if(user.username == username) {
            alert("Tên đăng nhập đã có người sử dụng");
            isUsed = true;
            return;
        }
    })
    if(!isUsed) {
        let newUser = {};
        newUser.username = username;
        newUser.password = password;
        pushUsers(newUser);
    }
}
