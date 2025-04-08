const x = document.getElementById("demo1");
const y = document.getElementById("demo2");
const z = document.getElementById("demo3");

function text123() {
x.innerHTML = "Hello Guys";
y.innerText = "What you Say";
x.style.color = "red";
}

function text234() {
y.style.background-color = "gold";

}

setTimeout(text123, 5000);
setTimeout(text234, 10000);

