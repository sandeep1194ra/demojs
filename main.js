function changePara() {
document.getElementById("demo").innerHTML = "You have changed paragraph";
document.getElementById("demo").innerHTML = "<h1>You Changed Paragraph to Heading<h1>";
}

function date() {
document.getElementById("demo1").innerHTML = Date();
document.getElementById("demo1").style.fontweight="800";
}

function demoAlert() {
document.getElementById("demo2").innerHTML = alert("Do you like our Pages?");
document.getElementById("demo2").innerHTML = "You liked our Page.";
document.getElementById("demo2").innerText = "You Clicked OK";
}
