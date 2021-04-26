const b_btn = document.querySelector(".Blue_btn");
const y_btn = document.querySelector(".Yellow_btn");
const p_btn = document.querySelector(".Pink_btn");
const reset_btn = document.querySelector(".reset_btn");

const blue = document.querySelectorAll("article.Blue");
const yellow = document.querySelectorAll("article.Yellow");
const pink = document.querySelectorAll("article.Pink");

const HIDE = "hidden";
const SHOW = "show";

function showing(show_item) {
    show_item.forEach(e => e.classList.remove(HIDE));
    show_item.forEach(e => e.classList.add(SHOW));
}

function hidding(hide_item) {
    hide_item.forEach(e => e.classList.remove(SHOW));
    hide_item.forEach(e => e.classList.add(HIDE));
}

function showBlue() {
    hidding(yellow);
    hidding(pink);
    showing(blue);
}

function showYellow() {
    hidding(blue);
    hidding(pink);
    showing(yellow);
}

function showPink() {
    hidding(yellow);
    hidding(blue);
    showing(pink);
}

function reset(){
    showing(blue);
    showing(pink);
    showing(yellow);
}

function handleSubmit() {
    b_btn.addEventListener("click", showBlue);
    y_btn.addEventListener("click", showYellow);
    p_btn.addEventListener("click", showPink);
    reset_btn.addEventListener("click", reset);
}

function init() {
    handleSubmit();
}

init();