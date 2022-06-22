
function add(){
    let usernames=(document.getElementById('signupUsername').value);
    let emails=(document.getElementById('email').value);
    let passwords=(document.getElementById('pass').value);
    localStorage.setItem('name', usernames);
    localStorage.setItem('email', emails);
    localStorage.setItem('pass', passwords)
    
    }
    
    
    function setFormMessage(formElement, type, message) {
        const messageElement = formElement.querySelector(".form__message");
    
        messageElement.textContent = message;
        messageElement.classList.remove("form__message--success", "form__message--error");
        messageElement.classList.add(`form__message--${type}`);
    }
    
    function setInputError(inputElement, message) {
        inputElement.classList.add("form__input--error");
        inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
    }
    
    function clearInputError(inputElement) {
        inputElement.classList.remove("form__input--error");
        inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
    }
    
    document.addEventListener("DOMContentLoaded", () => {
        const loginForm = document.querySelector("#login");
        const createAccountForm = document.querySelector("#createAccount");
    
        document.querySelector("#linkCreateAccount").addEventListener("click", e => {
            e.preventDefault();
            
           
            loginForm.classList.add("form--hidden");
            createAccountForm.classList.remove("form--hidden");
            
        });
    
        document.querySelector("#linkLogin").addEventListener("click", e => {
            e.preventDefault();
            loginForm.classList.remove("form--hidden");
            createAccountForm.classList.add("form--hidden");
        });
    
        loginForm.addEventListener("submit", e =>{
            e.preventDefault();
            let element= (document.getElementById('loguss').value);
            let logpass=(document.getElementById('passuss').value);
            if(localStorage.getItem('name')==element||localStorage.getItem('email')==element){
                if(localStorage.getItem('pass')==logpass){
    
                    next();
                }
    
                else{
                    setFormMessage(loginForm, "error", "Invalid password ");
                }
    
            }
            else{
                setFormMessage(loginForm, "error", "Invalid username/email");
               
            }
            
            
    
            
        });
    
        document.querySelectorAll(".form__input").forEach(inputElement => {
            inputElement.addEventListener("blur", e => {
                if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 5) {
                    setInputError(inputElement, "Username must be at least 5 characters in length");
                }
            });
            inputElement.addEventListener('blur',e=>{
                if (e.target.id === "pass" && e.target.value.length > 0 && e.target.value.length < 5) {
                    setInputError(inputElement, "Password must be at least 5 characters in length");
                }
            })
            inputElement.addEventListener('blur', e=>{
                const regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z{2,8}]+)?$/;
                if(e.target.id === "email"&& !e.target.value.match(regex)){
                    setInputError(inputElement, "email is not valid")
                }
    
            })
    
            inputElement.addEventListener("input", e => {
                clearInputError(inputElement);
            });
        });
    });
    
    function next(){
        var nextpg = document.getElementById('nextpage');
       
        nextpg.addEventListener('click', function () {
          //path here
          
          console.log("neshtp");
    })
    }
    
    