


var elemLoginButton = document.getElementById("login_button");
console.log(elemLoginButton);


//Centralizar las constantes
const ERROR_MESSAGE_ELEMENT_CLASS = "user_message";


var ValidMessage = false;

elemLoginButton.onclick = function () {
    console.log("Login button cliked!");


    function showMessage(message, isError) { 

        var elemPreviousMessage = document.getElementById (ERROR_MESSAGE_ELEMENT_CLASS);

        
        if (elemPreviousMessage) {
            elemPreviousMessage.parentNode.removeChild(elemPreviousMessage);
        }

    
        var elemMessage = document.createElement("p");
        elemMessage.innerText = message;
        elemMessage.id = ERROR_MESSAGE_ELEMENT_CLASS;
        if (isError){
            elemMessage.className = "error-message";
        }
        

        
        var elemMain_div = document.getElementById("main_div");
        elemMain_div.appendChild(elemMessage);
    }


    var elemUsername = document.getElementById("username");
    console.log(elemUsername);

    var elemPassword = document.getElementById("password");
    console.log(elemPassword);

    var username = elemUsername.value;
    console.log(username);

    var password = elemPassword.value;
    console.log(password);

    
    


    if (username === "usuario" && password === "123") {

       

        showMessage("bienvenido"+ username);

    } else {
        showMessage("Credenciales incorrectas", true);

    }
    
    if(username === ""){
        showMessage("el campo vacio de usuario esta vacio",true);
    }
    if(password === ""){
        showMessage("campo de contraseña vacio",true);
    }
    if(username === "" && password === ""){
        showMessage("tus campos no pueden estar vacios", true);
    }

}