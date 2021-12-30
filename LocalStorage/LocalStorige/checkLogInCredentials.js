function checkLogInCredentials() {
    let loginUsernameInput = document.querySelector("#login-username").value;
    let loginPasswordInput = document.querySelector("#login-password").value;
    
    let usernameLS = JSON.parse(localStorage.getItem("newUser")).userName;
    let passwordLS = JSON.parse(localStorage.getItem("newUser")).password;
  
    if (loginUsernameInput === usernameLS && loginPasswordInput === passwordLS) {
      viewLogIn.style.display = "none";
      viewEnterPage.style.display = "none";
      viewSignUp.style.display = "none";
      notification.style.display = "none";
  
      setTimeout(function () {
        alert("you have entered the page"); ///to be continued 
      }, 1000);
    } else {
      notification.style.display = "block";
      notification.innerHTML = "password or username do not match";
    }
  }