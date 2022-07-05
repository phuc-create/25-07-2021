const submit = document.getElementById("submit");
const model = document.querySelector(".modl-free");
const TxtAccount = document.getElementById("account");
const TxtPassword = document.getElementById("password");

function check() {
    var user = document.regis.user.value;
    var password = document.regis.password.value;
    console.log(user);
    if (user == "" || user == null) {
        TxtAccount.innerHTML = "<p style='color:red'>Warning account</p>";
        return false;
    } else if (password == null || password == "") {
        TxtPassword.innerHTML = "<p style='color:red'>Warning password</p>";
        return false;
    } else {
        model.classList.add("active-model");
        return true;
    }
}