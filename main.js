const x = document.getElementById("demo1");
const y = document.getElementById("demo2");
const z = document.getElementById("demo3");

function text123() {
x.innerHTML = "Hello Guys";
y.innerText = "What you Say";
z.style.color = "red";
}

setTimeout(text123, 5000);
