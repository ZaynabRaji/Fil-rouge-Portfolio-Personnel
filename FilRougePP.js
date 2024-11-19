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
function toggleMenu() {
  const HomeMenu = document.getElementById('HomeMenu');
  HomeMenu.classList.toggle("showMenu");
}

// Filter Projects
filterSelection("all");
function filterSelection(c){
  var x, i;
  x = document.querySelector("filter");
  if (c == "all") c = "";
  for (i = 0; i < x.lenght; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}
function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}
var ProjectMenu = document.getElementById("ProjectMenu");
var ProjectList = ProjectMenu.getElementsByClassName("ProjectList");
for (var i = 0; i < btns.length; i++) {
  ProjectList[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}