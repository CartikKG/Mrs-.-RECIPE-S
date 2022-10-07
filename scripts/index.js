import { appendnavbar } from "../component/navbar.js";

document.getElementById("navbar").innerHTML = appendnavbar();

let flag = localStorage.getItem("login") || "false";
let meal;
console.log(flag);
if (flag == "true") {
  search.style.display = "block";
  let url = "https://www.themealdb.com/api/json/v1/1/random.php";
  async function promise() {
    try {
      let ans = await fetch(url);
      let { meals } = await ans.json();
      // console.log(meals);

      display(meals);
    } catch (error) {
      console.log(error);
    }
  }
  promise();

  function display(meals) {
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
} else if (flag == "false") {
  search.style.display = "none";
  login_signup.innerHTML = `
  <a href="./login.html">Login</a>
  <a href="./signup.html">Sign-Up</a>`;
  content.innerHTML = `
  <h2> LOGIN TO VIEW FURTHER </h2>
  <img src="./384-3849791_2-female-chef-logo-hd-png-download-removebg-preview.png" id="beforeloginimg"  >
  <a href="./login.html" id="beforeloginlink">Login</a>`;
}

function logoutt() {
  localStorage.setItem("login", "false");
  // window
  window.open("./login.html", "_self");
}

document
  .getElementById("search")
  .addEventListener("input", debounceing(searchapi, 500));

function debounceing(fun, delay) {
  let timeid;
  return function () {
    if (timeid) clearTimeout(timeid);
    timeid = setTimeout(() => {
      fun();
    }, delay);
  };
}
function searchapi() {
  async function promise() {
    try {
      let name = document.getElementById("search").value;
      let ans = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
      );
      let ans1 = await ans.json();
      console.log(ans1);
      meal = ans1.meals;
      displaybysearch(ans1.meals);
    } catch (error) {
      console.log(error);
    }
  }
  promise();
}

function displaybysearch(data) {
  // event.preventDefault();
  document.getElementById("content").innerHTML = "";
  data.map((el, index) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <img  id="contentdivv" src=${el.strMealThumb} alt="" >
    <h3>${el.strMeal}</h3>
    `;
    div.addEventListener("click", () => {
      refer(index);
    });
    div.addEventListener("mouseenter", changecontent);
    div.addEventListener("mouseleave", () => {
      changeconten(el.strMealThumb, el.strMeal);
    });
    document.getElementById("content").append(div);
  });
}
//
function changecontent() {
  console.log();
  // event.target.innerHTML = `
  // CLICK TO VIEW RECIPE `;
  event.target.style.opacity = 0.3;
}
function changeconten(img, tit) {
  // console.log();
  event.target.style.opacity = 1;
  event.target.innerHTML = `
  <img id="contentdivv" src=${img} alt="" >
  <h3>${tit}</h3>
  `;
}
function refer(po) {
  let key = meal.filter((el, inn) => {
    if (inn == po) {
      return el;
    }
  });
  localStorage.setItem("databylick", JSON.stringify(key));
  window.open("./random.html", "_self");
}
