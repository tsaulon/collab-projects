//Client side validation

var submit = document.querySelector("#submit");

function validate()
{
    //declare in function scope for every new value entered
    var password = document.querySelector("#password");
    var vpassword = document.querySelector("#vpassword");
    var name = document.getElementsByName("name")[0];
    var email = document.getElementsByName("email")[0];

    submit.disabled = ( password.value == vpassword.value && 
                        password.value.length > 8 && vpassword.value.length > 8 &&
                        name.value.length > 0 && email.value.length > 0) ? false : true;
}