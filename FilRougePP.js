// function ensures only one popup is open at a time.
function closeAllPopups() {
  document.querySelectorAll('.popup').forEach(popup => {
    popup.classList.remove('openpopup1', 'openpopup2', 'openpopup3', 'openpopup4', 'openpopup5', 'openpopup6', 'openpopup7');
  });
}

// click happens outside any open popup and ensures the ProjectImg elements are excluded.
document.addEventListener('click', function (event) {
  const openPopups = document.querySelectorAll('.popup.openpopup1, .popup.openpopup2, .popup.openpopup3, .popup.openpopup4, .popup.openpopup5, .popup.openpopup6, .popup.openpopup7');
  
  openPopups.forEach(popup => {
    if (!popup.contains(event.target) && !event.target.classList.contains('ProjectImg')) {
      closeAllPopups();
    }
  });
});

// 1
const popupRecipes = document.getElementById("popupRecipes");
function openPopupRecipes() {
  closeAllPopups();
  popupRecipes.classList.add("openpopup1");
}
function closePopupRecipes() {
  popupRecipes.classList.remove("openpopup1");
}

// 2
const popupMTS = document.getElementById("popupMTS");
function openPopupMTS() {
  closeAllPopups();
  popupMTS.classList.add("openpopup2");
}
function closePopupMTS() {
  popupMTS.classList.remove("openpopup2");
}
// 3
const popupPortfolio = document.getElementById("popupPortfolio");
function openPopupPortfolio() {
  closeAllPopups();
  popupPortfolio.classList.add("openpopup3");
}
function closePopupPortfolio() {
  popupPortfolio.classList.remove("openpopup3");
}
// 4
const popupNote = document.getElementById("popupNote");
function openPopupNote() {
  closeAllPopups();
  popupNote.classList.add("openpopup4");
}
function closePopupNote() {
  popupNote.classList.remove("openpopup4");
}
// 5
const popupTodo = document.getElementById("popupTodo");
function openPopupTodo() {
  closeAllPopups();
  popupTodo.classList.add("openpopup5");
}
function closePopupTodo() {
  popupTodo.classList.remove("openpopup5");
}
// 6
const popupMeal = document.getElementById("popupMeal");
function openPopupMeal() {
  closeAllPopups();
  popupMeal.classList.add("openpopup6");
}
function closePopupMeal() {
  popupMeal.classList.remove("openpopup6");
}
// 7
const popupWeather = document.getElementById("popupWeather");
function openPopupWeather() {
  closeAllPopups();
  popupWeather.classList.add("openpopup7");
}
function closePopupWeather() {
  popupWeather.classList.remove("openpopup7");
}

// burger menu 
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
