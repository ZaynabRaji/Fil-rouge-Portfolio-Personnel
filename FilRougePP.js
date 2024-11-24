// 1
// const popupRecipes = document.getElementById("popupRecipes");

// function openPopupRecipes() {
//     popupRecipes.classList.add("openpopup1");
//     // Add event listener to close the popup when clicking outside
//     document.addEventListener("click", handleOutsideClick);
// }

// function closePopupRecipes() {
//     popupRecipes.classList.remove("openpopup1");
//     // Remove the event listener to avoid redundant checks
//     document.removeEventListener("click", handleOutsideClick);
// }

// function handleOutsideClick(event) {
//     // Check if the click is outside the popup
//     if (!popupRecipes.contains(event.target)) {
//         closePopupRecipes();
//     }
// }

const popupRecipes = document.getElementById("popupRecipes");
function openPopupRecipes(){
  popupRecipes.classList.add("openpopup1");
}
function closePopupRecipes(){
  popupRecipes.classList.remove("openpopup1");
}

// 2
const popupMTS = document.getElementById("popupMTS");
function openPopupMTS(){
  popupMTS.classList.add("openpopup2");
}
function closePopupMTS(){
  popupMTS.classList.remove("openpopup2");
}
// 3
const popupPortfolio = document.getElementById("popupPortfolio");
function openPopupPortfolio(){
  popupPortfolio.classList.add("openpopup3");
}
function closePopupPortfolio(){
  popupPortfolio.classList.remove("openpopup3");
}
// 4
const popupNote = document.getElementById("popupNote");
function openPopupNote(){
  popupNote.classList.add("openpopup4");
}
function closePopupNote(){
  popupNote.classList.remove("openpopup4");
}
// 5
const popupTodo = document.getElementById("popupTodo");
function openPopupTodo(){
  popupTodo.classList.add("openpopup5");
}
function closePopupTodo(){
  popupTodo.classList.remove("openpopup5");
}
// 6
const popupMeal = document.getElementById("popupMeal");
function openPopupMeal(){
  popupMeal.classList.add("openpopup6");
}
function closePopupMeal(){
  popupMeal.classList.remove("openpopup6");
}
// 7
const popupWeather = document.getElementById("popupWeather");
function openPopupWeather(){
  popupWeather.classList.add("openpopup7");
}
function closePopupWeather(){
  popupWeather.classList.remove("openpopup7");
}


// burger menu NOT WORKING 
function toggleMenu() {
  const homeMenu = document.getElementById('HomeMenu');
  homeMenu.classList.toggle('showMenu');
}

// footer : date and time
setInterval(myTimer, 1000);

function myTimer() {
const datetime = new Date().toLocaleString();
  document.getElementById("DateTime").innerHTML = datetime;
}
