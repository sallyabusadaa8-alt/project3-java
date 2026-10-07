const title =  document .getElementById("title")
const message = document.querySelector("#message");
const button = document.querySelector("#changeButton");
const box = document.getElementById("box");

title.textContent = "Welcome to JavaScript!";

message.textContent = "The text has been changed by JavaScript.";

box.style.backgroundColor = "lightblue";

box.classList.add("active");

console.log(title);
console.log(message);
console.log(button);
console.log(box);
