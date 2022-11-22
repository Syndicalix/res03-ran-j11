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
        fieldset.appendChild(inputError);
    }

    
})