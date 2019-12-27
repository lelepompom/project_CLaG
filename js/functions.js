var time = new Date();
var color;
var myElement;

if (time.getHours() == 12) {
    color = 'red';
} else if (time.getHours() == 15)  {
    color = 'green';
} else {
    color = 'yellow';
}

myElement = document.getElementById('timeColor');
myElement.style.backgroundColor = color;

var userName = prompt('¿Cómo te llamas?');
document.getElementById('userName').innerHTML = userName;