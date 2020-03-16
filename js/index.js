// Your code goes here
const mainHeader = document.querySelector('header');
const nav = document.querySelector('.nav');
const navLogo = document.querySelector('.logo-heading');
const navLink = document.querySelector('a');
const heading = document.querySelector('.intro');
const headingImg = document.querySelector('.intro img');
const imgContent = document.querySelector('.img-content img');
const body = document.querySelector('body');

mainHeader.addEventListener('mousedown', (event) => {
  event.target.style.backgroundColor = 'blue';
  // Resets the color after a short delay
  setTimeout( () => {
    event.target.style.backgroundColor = 'white';
  }, 500);
}, false);

nav.addEventListener('mouseover', (event) => {
  // Highlights the mouseover target
  event.target.style.color = '#E8A87C';
  event.target.style.textShadow = '2px 2px #5A3226';

  // Resets the color after a short delay
  setTimeout( () => {
    event.target.style.color = '#212529';
    event.target.style.textShadow = 'none';
  }, 500);
}, false);

navLogo.addEventListener('mouseover', (event) => {
  // Highlights the mouseover target
  event.target.style.color = '#E8A87C';
  event.target.style.textShadow = '2px 2px #5A3226';
})

navLogo.addEventListener('mouseleave', (event) => {
  event.target.style.color = 'black';
  event.target.style.textShadow = 'none';
})

navLink.addEventListener('click', (event) => {
  event.preventDefault();
})

heading.addEventListener('mouseover', (event) => {
  // Highlights the mouseover target
  event.target.style.color = '#E8A87C';
  event.target.style.textShadow = '2px 2px #5A3226';
  event.stopPropagation();

  // Resets the color after a short delay
  setTimeout( () => {
    event.target.style.color = '#212529';
    event.target.style.textShadow = 'none';
  }, 1000);
}, false);

headingImg.addEventListener('dblclick', (event) => {
  headingImg.classList.toggle('large');
});

imgContent.addEventListener('click', (event) => {
  imgContent.classList.toggle('large');
  event.stopPropagation();
});

body.addEventListener('keydown', function(event){
    console.log(`${event.code} was pressed.`);
    console.log(`${event.code} was pressed down.`);
})

body.addEventListener('keyup', (event) => {
  console.log(`${event.code} was pressed released.`);
})
