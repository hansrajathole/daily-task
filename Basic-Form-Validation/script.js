let email = document.querySelector("#email")
let password = document.querySelector("#password")
let Cpassword = document.querySelector("#confirmPassword")

let btn = document.querySelector(".submit-btn")

document.querySelector("#validationForm").addEventListener("submit", function (e) {
    e.preventDefault();
})

btn.addEventListener("click",()=>{
    let emailval = email.value
    let passwordval = password.value
    let Cpasswordval = Cpassword.value

    if(emailval==""||passwordval==""||Cpasswordval==""){
        alert("please fill out all fields.")
    }
    else if(passwordval!==Cpasswordval){
        alert("password does not match please try again")
        Cpassword.value =""
    }else{
    alert("Registation Successfully")
    email.value = ""
    password.value = ""
    Cpassword.value = ""
    }
    
})