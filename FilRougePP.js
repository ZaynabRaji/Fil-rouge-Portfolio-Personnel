// 1
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

// const popup = document.getElementsById('ProjectContainer');
// popup.addEventListener('click', (event) => {
//   if (event.target == popup){
//     popup.close();
//   }
// })

// burger menu
function toggleMenu(){
  const HomeMenu = document.getElementsById('HomeMenu');
  HomeMenu.classList.toggle("showMenu")
}