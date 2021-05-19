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

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
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

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset, 
  //   s1coords.top + window.pageYOffset
  // );
  
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset, 
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({behavior: 'smooth'});

});
