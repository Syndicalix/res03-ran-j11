let form = document.querySelector("form:first-of-type");

form.addEventListener("submit", function(e){
    
    e.preventDefault();
    
    let usernameInput = document.querySelector("#username");
    if (usernameInput.value !== "")
    
    {
        e.target.submit();
    }
    else
    {
        let inputError = document.createElement("p");
        let fieldset = document.querySelector("form:first-of-type fieldset:first-of-type");
        
        inputError.innerHTML="Veuillez choisir un nom d'utilisateur";
        inputError.classList.add("erreur");
        usernameInput.classList.add("erreur");
        fieldset.appendChild(inputError);
    }
 //* *//
 
        let emailInput = document.querySelector("#email");
        if (usernameInput.value !== "")
     //*   else if(emailInput.value.indexof("@,0")<0 || emailInput.value.indexof(".",0)<0); *//

    {
        e.target.submit();
    }
    else
    {
        let inputError = document.createElement("p");
        let fieldset = document.querySelector("form:first-of-type fieldset:nth-of-type(2)");
        
        inputError.innerHTML="Veuillez entrer un mail valide";
        inputError.classList.add("erreur");
        emailInput.classList.add("erreur");
        fieldset.appendChild(inputError);
    }

    let passwordnameInput = document.querySelector("#password");
    let confirmpasswordnameInput = document.querySelector("#confirm-password");
        
        if (usernameInput.value !== "")
    
    {
        e.target.submit();
    }
    else
    {
        let inputError = document.createElement("p");
        let fieldset = document.querySelector("form:first-of-type fieldset:nth-of-type(4)");

        
        inputError.innerHTML="Les mots de passe ne correspondent pas";
        inputError.classList.add("erreur");
        confirmpasswordnameInput.classList.add("erreur");
        fieldset.appendChild(inputError);
        
    }
})