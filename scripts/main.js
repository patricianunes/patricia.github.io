var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/family.jpeg') {
      myImage.setAttribute ('src','images/photo2.jpg');
    } else {
      myImage.setAttribute ('src','images/photo2.jpg  ');
    }
} 

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'I love my family, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'I love my family, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}