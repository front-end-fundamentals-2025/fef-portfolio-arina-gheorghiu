const myButton = document.getElementById('myButton');

function changeColor() {
    myButton.style.backgroundColor = "rgb(235, 45, 89)";
}

myButton.addEventListener("mouseover", changeColor);


function changeColorBack() {
	myButton.style.backgroundColor = "black";
}
myButton.addEventListener("mouseout", changeColorBack);


function textColor() {
	myButton.style.color = "black";
}
myButton.addEventListener("mouseover", textColor);


function textColorBack() {
	myButton.style.color = "white";
}
myButton.addEventListener("mouseout", textColorBack);