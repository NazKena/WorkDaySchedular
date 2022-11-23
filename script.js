var currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(currentTime);



var inputAnswer = document.getElementById("#answer")
var buttonEl = document.getElementById("button")

buttonEl.addEventListener("click", saveToStorage())

function saveToStorage() {
localStorage.setItem("task", inputAnswer.innerHTML);
}