/*********************
 *  FORM VALIDATION  *
 *********************/
module.exports.userIsValid = (x) =>
{
    return  new Promise((resolve, reject) => {

           (x.name.length > 0 && isEmail(x.email) &&
                x.password == x.vpassword && x.password.length > 8 && x.vpassword.length > 8) ?
                                    resolve("User data is valid!") : reject("User data is not valid!");
    });
}

//run validation when user focuses out.
function isEmail(x){

    var isValid = false;
    var toValidate = x.split("");

    //check for only a single '@' sign.
    if(toValidate.indexOf('@') == toValidate.lastIndexOf('@')){
        //begin iteration from the '@' sign index.
        for(var i = toValidate.indexOf('@'); i < toValidate.length; i++){
            //if '.' is found then email is valid and is not the next immediate character
            if(toValidate[i] == '.' && i != toValidate.indexOf('@') + 1)
            {
                //if i is not the last character of the string
                if(toValidate.indexOf('.') != toValidate.length - 1){
                    isValid = true;
                }
            }
        }
    }

    return isValid;
}

/***********************
 *  USERNAME CREATION  *
 ***********************/

 var faker = require("faker");

 //accepts a string argument
 module.exports.generateUsername = () =>
 {
    var adj = faker.hacker.adjective(); //isolating for string manipulation

    return faker.commerce.productAdjective() + " " + adj.charAt(0).toUpperCase() + adj.slice(1) + " " + faker.name.jobType();
 }