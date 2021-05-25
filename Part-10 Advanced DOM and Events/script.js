'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function(e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Replaced "for" loop with forEach method, you can use forEach on nodelists
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener('click', openModal);
// }


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Page Navigation
// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

// Event delegation / page navigation
document.querySelector('.nav__links').addEventListener('click', function(e){
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  };
});


///////////////////////////////////////////////////
///////////////////////////////////////////////////
// LECTURES

// Selecting, Creating and Deleting elements lecture
console.log('Selecting, Creating and Deleting elements lecture');

// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');

const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));


// Creating and inserting elements, .insertAdjacentHTML is one way to insert html
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookie for improved functionality and analytics.';
message.innerHTML = 'We use cookie for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// message is now a live element in the dom, but it cannot be in two places at once
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true)); // to make a clone and have the element in multiple places

// Other methods of adding dom elements before or after a certain point in the document
// header.before(message);
// header.after(message);


// Delete Elements
document.querySelector('.btn--close-cookie').addEventListener('click', function() {
  message.remove(); // newer more recent method
  // message.parentElement.removeChild(message); // how this used to be done
});


// Styles, attributes and classes lecture
console.log('Styles, attributes and classes lecture');

//Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = '70px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful logo';

// Non-standard attributes, anything else
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data Attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('a', 'b', 'c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

// Dont Use This
// logo.className = 'jonas';


// Implementing Smooth Scroll lecture
console.log('Implementing Smooth Scroll lecture');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e){
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log('Current scroll X:Y', window.pageXOffset, window.pageYOffset);

  console.log('height/width viewport', 
  document.documentElement.clientHeight,
  document.documentElement.clientWidth
  );

  // Scrolling manual
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset, 
  //   s1coords.top + window.pageYOffset
  // );
  
  // scrolling old school
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset, 
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // modern way of scrolling
  section1.scrollIntoView({behavior: 'smooth'});

});


// Types of events and event handlers lecture
console.log('Types of events and event handlers lecture');


// const h1 = document.querySelector('h1');

// const alertH1 = function(e){
//   alert('addEventlistener: mouseenter');

//   h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);


// Event propagation: Bubbling and Capturing Lecture
console.log('Event propagation: Bubbling and Capturing Lecture');

// rgb(255, 255, 255)
const randomInt = (min, max) => Math.floor(Math.random()* (max - min + 1) + min);

const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor());

// in an event handler, "this" refers to what the handler is attached to
document.querySelector('.nav__link').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
});


// DOM Traversal Lecture
console.log('DOM Traversal Lecture');

const h1 = document.querySelector('h1');


// Going downwards, selecting child elements
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes); // not used a lot
console.log(h1.children); // gives a live collection of the html elements

// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';


// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

// closest finds the closest parent element of a selected element
// h1.closest('.header').style.background = 'var(--gradient-secondary)';


// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.parentElement.children);

// Can spread out elements into an array and perform array methods on them, like in this example
// [...h1.parentElement.children].forEach(function(element) {
//   if(element !== h1) {
//     element.style.transform = 'scale(0.5)';
//   };
// });


// Build a tabbed component Lecture

console.log('Build a tabbed component Lecture');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// The forEach method adding event handlers is bad practice, especially when you have lots of tabs,
// all the copies of methods will slow down the page

// Instead lets use event delegation, we need to attach the event handler to the common parent
// of all the elements we're interested in

tabsContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Guard clause
  if(!clicked) return;

  // Active tab
  if(clicked) {
    // Hide all tabs
    tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
    // Show clicked tab
    clicked.classList.add('operations__tab--active');
  }

  // Hide all content
  tabsContent.forEach(content => content.classList.remove('operations__content--active'));

  // Activate Clicked Content Area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});