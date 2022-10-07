import { appendnavbar } from "../component/navbar.js";

document.getElementById("navbar").innerHTML = appendnavbar();

document.querySelector("form").addEventListener("submit", login);
search.style.display = "none";
function login() {
  console.log("ok");
  let data = JSON.parse(localStorage.getItem("users")) || [];
  let email = document.getElementById("email").value;
  let passowrd = document.getElementById("password").value;
  let loginflag = false;
  let wrong = false;
  let notfound = false;
  let name = "";
  data.map((el, inn) => {
    if (el.email == email && el.password == passowrd) {
      loginflag = true;
      // name = el.name;
      localStorage.setItem("name", el.name);
      localStorage.setItem("login", "true");
    } else if (el.email == email && el.password != passowrd) {
      wrong = true;
    } else if (el.email != email) {
      notfound = true;
    }
  });

  if (loginflag) {
    alert("Login successful!");

    window.open("./index.html");
    // location.href = "index.html";
    // location.href = "./index.html";
  } else if (wrong) {
    alert("Wrong credentials");
  } else if (notfound) {
    alert("User doesn't exist, Sign Up");
  }
}
