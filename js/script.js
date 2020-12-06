console.log('it works!');

//button on click change background-color//

//element
let whiteButton = document.getElementById ("whiteButton");

//event
whiteButton.addEventListener ('click', switchWhite);

//execution
function switchWhite(event){ 
document.getElementsByTagName('body')[0].classList.toggle("toggled"); 
};

//button menu on click
// Elements
const burguerButton = document.getElementById("js-burguer-button");
const body = document.body;


//Events
burguerButton.addEventListener("click", toggleMenu);


//Execution
function toggleMenu(_event) {
  body.classList.toggle("menu-open");
  ariaExpandedHandler();
}



// extend area and open the menu module

// Event
const windowEvents = ["DOMContentLoaded", "resize"];

windowEvents.forEach(function (event) {
  window.addEventListener(event, ariaHiddenHandler);
});

// Execution

function ariaHiddenHandler(_event) {
  if (window.innerWidth > 600) {
    burguerButton.setAttribute("aria-hidden", true);
  } else {
    burguerButton.setAttribute("aria-hidden", false);
  }
}

function ariaExpandedHandler(_event) {
  const isMenuOpen = body.classList.contains("menu-open");

  if (isMenuOpen) {
    burguerButton.setAttribute("aria-expanded", true);
  } else {
    burguerButton.setAttribute("aria-expanded", false);
  }
}

//Json file animations 

//observe
const blmAnimationContainer = document.getElementById('blm-animation');

const animItem = bodymovin.loadAnimation({
  wrapper: blmAnimationContainer,
  animType: 'svg',
  loop: true,
  path: 'data/observe.json',
});

//lamp

const blmAnimationContainertwo = document.getElementById('blm-animation-two');

const animItemTwo = bodymovin.loadAnimation({
  wrapper: blmAnimationContainertwo,
  animType: 'svg',
  loop: true,
  path: 'data/lamp.json',
});

//dino
const blmAnimationContainerthree = document.getElementById('blm-animation-three');

const animItemthree = bodymovin.loadAnimation({
  wrapper: blmAnimationContainerthree,
  animType: 'svg',
  loop: true,
  path: 'data/dino.json',
});



