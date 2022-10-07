import { appendnavbar } from "../component/navbar.js";

document.getElementById("navbar").innerHTML = appendnavbar();

let meals = JSON.parse(localStorage.getItem("databylick")) || [];
console.log(meals);
display(meals);
function display(meals) {
  search.style.display = "none";
  // event.preventDefault();
  let name = localStorage.getItem("name");
  login_signup.innerHTML = `
    <span>${name}</span>
    <span id="logout">Logout</span>`;
  //
  meals.map((el, inn) => {
    let youtube = el.strYoutube.replace("watch?v=", "embed/");
    // console.log(el.strYoutube);
    // // let div = document.getElementById("content");
    // console.log(youtube);
    // let key = "";
    // let flag = false;
    // for (let i = 1; i < el.strYoutube.length; i++) {
    //   if (flag || el.strYoutube[i - 1] == "=") {
    //     flag = true;
    //     key += el.strYoutube[i];
    //   }
    // }
    // console.log(key);
    content.innerHTML = ` <div>
    <img
      src=${el.strMealThumb}
      alt=""
      id="randomimg"
    />
    <h1> ${el.strMeal}</h1>
    <iframe
      src="${youtube}";
      frameborder="0"
    ></iframe>
  </div>
  <div id="discriptiondiv">
    <h1>${el.strMeal}</h1>
    <p>
      ${el.strInstructions}
    </p>
  </div>
    `;
  });

  logout.addEventListener("click", logoutt);
}
function logoutt() {
  localStorage.setItem("login", "false");
  // window
  window.open("./login.html", "_self");
}
