import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import "../component/app-bar.js";
import "../component/jumbotron-app.js";
import "../component/restaurant-list.js";
import "../component/restaurant-item.js";
import "../component/app-footer.js";
import "../component/quotes-app.js";
const { restaurants } = require("../public/data/DATA.json");

const btnDrawer = document.getElementById("btn-drawer");
const drawer = document.querySelector("nav");
const restaurantList = document.querySelector("restaurant-list");
// const data =
btnDrawer.addEventListener("click", () => {
  drawer.classList.toggle("open");
});

const item = restaurants.map((res) => {
  const restaurantItem = document.createElement("restaurant-item");
  restaurantItem.restaurant = res;
  restaurantItem.setAttribute("id", res.id);
  return restaurantItem;
});
restaurantList.append(...item);
