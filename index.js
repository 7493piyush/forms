
function validation(){
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    var conpass = document.getElementById('conpass').value;
    var email = document.getElementById('email').value;

        // username field for js form
        if(user== ""){
            document.getElementById('username').innerHTML = "**please fill the username field";
            return false;
        }
        if((user.length <= 2)||(user.length >= 30)){
            document.getElementById('username').innerHTML = "**username length must be between 2 to 30";
            return false;
        }
        if(!isNaN(user)){
            document.getElementById('username').innerHTML = "**only characters are allowed";
            return false;
        }

        // password field for js form
        if(pass== ""){
            document.getElementById('password').innerHTML = "**please fill the password field";
            return false;
        }
        if((pass.length <= 8)||(pass.length >= 30)){
            document.getElementById('password').innerHTML = "**password length must be between 8 to 30";
            return false;
        }
        if(pass!=conpass){
            document.getElementById('confirmpass').innerHTML = "**passwords are not matching";
            return false;
        }
        if(conpass== ""){
            document.getElementById('confirmpass').innerHTML = "**please fill the confirm password field";
            return false;
        }

        // password field for js form
        if(email== ""){
            document.getElementById('emails').innerHTML = "**please fill the email field";
            return false;
        }
        if(email.indexOf('@') <= 0){
            document.getElementById('emails').innerHTML = "**@ is at invalid position";
            return false;
        }
        if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
            document.getElementById('emails').innerHTML = "**invalid";
            return false;
        }
}