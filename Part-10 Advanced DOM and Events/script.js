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



// Passing arguments to Event Handlers Lecture
console.log('Passing arguments to Event Handlers Lecture');

// Menu fade animation
const nav = document.querySelector('.nav');

const handleHover = function(e) {
  if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  };
}

// Passing "argument" into handler, "this" keyword becomes the passed in value in the bound function
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));



// Sticky Navigation, Scroll Event Lecture
console.log('Sticky Navigation, Scroll Event Lecture');

// Sticky Navigation
const initialCoords = section1.getBoundingClientRect();

// Using scroll event to add sticky nav
// window.addEventListener('scroll', function(){

//   // console.log(window.scrollY);
//   // console.log(initialCoords);

//   if(window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });


// Intersection Observer API Lecture
console.log('Intersection Observer API Lecture');

// Sticky nav: via the intersection observer API
// const observerCallBack = function(entries, observer){
//   entries.forEach(entry => {
//     console.log(entry);
//   })
// };

// const observerOptions = {
//   root: null, // this is the viewport
//   threshold: [0, 0.2], // 0.1 == 10%
//   rootMargin: "-150px",
// };

// const observer = new IntersectionObserver(observerCallBack, observerOptions);
// observer.observe(section1);


const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

function stickyNav(entries) {
  const [entry] = entries; // destructuring
  // console.log(entry);

  if(!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
  
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);



// Revealing elements on scroll Lecture
console.log('Revealing elements on scroll Lecture');

// Reveal sections (remove hidden class)
// const allSections = document.querySelectorAll('.section');

const revealSection = function(entries, observer){
  const [entry] = entries;

  if (!entry.isIntersecting) {
    return
  } else {
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  }
  
};

// when 20% of viewport intersects observed section, function will trigger
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2, // 20% intersecting ratio needed to trigger function
});

allSections.forEach(function(section){
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});



// Lazy Loading Images Lecture
console.log('Lazy Loading Images Lecture');

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function(entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if(!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  // When new image source is loaded, remove the blur filter class
  entry.target.addEventListener('load', function(){
    entry.target.classList.remove('lazy-img');
  });
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '-200px',
});

imgTargets.forEach(img => imgObserver.observe(img));



// Building a Slider Component Lecture
console.log('Building a Slider Component Lecture');

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotsContainer = document.querySelector('.dots');

let currentSlide = 0;
const maxSlide = slides.length;

const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.8)';
slider.style.overflow = 'hidden';

// 0%, 100%, 200%, 300% translated slides
// slides.forEach((s, i) => s.style.transform = `translateX(${100 * i}%)`);

const goToSlide = function(slide) {
  slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - currentSlide)}%)`);
};



// Next slide
const nextSlide = function(){
  if(currentSlide == maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  goToSlide(currentSlide);
  activateDot(currentSlide);
};


// Previous slide
const previousSlide = function(){
  currentSlide--;
  if(currentSlide < 0) {currentSlide = maxSlide - 1;}

  goToSlide(currentSlide);
  activateDot(currentSlide);
};



// Add key listeners for left and right key press scroll functionality
document.addEventListener('keydown', function(e){
  // console.log(e);
  if(e.key === 'ArrowLeft') {previousSlide();}
  if(e.key === 'ArrowRight') {nextSlide();}
});

// Add event listeners for left or right arrow button clicks
btnLeft.addEventListener('click', previousSlide);
btnRight.addEventListener('click', nextSlide);



// Create the dots for the slider
const createDots = function(){
  slides.forEach(function(s, i) {
    dotsContainer.insertAdjacentHTML('beforeend',
    `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};



// Keep track of which slide we're on via the dots
const activateDot = function(slide){
  document.querySelectorAll('.dots__dot').forEach((dot, i) => {
    dot.classList.remove('dots__dot--active');
  });

  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
};



// Add event listener to dot container, slide to corresponding slide, based on dot clicked
dotsContainer.addEventListener('click', function(e){
  if(e.target.classList.contains('dots__dot')) {
    currentSlide = e.target.dataset.slide;
    goToSlide(currentSlide);
  }

  activateDot(currentSlide);
});

// Initialize slider
const init = function(){
  goToSlide(0);
  createDots();
  activateDot(0);
};
init();