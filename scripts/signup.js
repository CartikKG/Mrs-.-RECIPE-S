import { appendnavbar } from "../component/navbar.js";

document.getElementById("navbar").innerHTML = appendnavbar();
search.style.display = "none";
document.querySelector("form").addEventListener("submit", createdata);

function UserData(a, b, c) {
  this.name = a;
  this.email = b;
  this.password = c;
}

function createdata() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let temp = new UserData(name, email, password);
  let data = JSON.parse(localStorage.getItem("users")) || [];
  //   if()
  let flag = false;
  data.map(function (el, inn) {
    if (el.email == email) {
      flag = true;
    }
  });

  if (flag) {
    alert("user already exist!");
  } else {
    data.push(temp);
    localStorage.setItem("users", JSON.stringify(data));
    alert("Sign up Succesfully");
    window.open("./login.html");
  }
}
