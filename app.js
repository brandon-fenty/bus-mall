'use strict';

// ===========================
// declare global variables ||
// ===========================

// Create an array to store all the pictures
var allPictures = [];
// Create the image elements for my image table
var imgEl1 = document.getElementById('product1');
var imgEl1 = document.getElementById('product2');
var imgEl1 = document.getElementById('product3');
// Set a variable for the initial starting point of all images
var picture1Index = 0;
var picture2Index = 1;
var picture3Index = 2;

// ==================+++
// create constructor ||
// ==================+++

function Picture (src, name) {
    this.imgSrc = src;
    this.imgName = name;
    // Create click tracker
    this.clicked = 0;
    // Push data to array
    allPictures.push(this);
};


// ==================+++++++
// create image instances ||
// ==================+++++++

new Picture ('imgs/bag.jpg', 'R2D2 Luggage');
new Picture ('imgs/banana.jpg', 'Banana Slicer');
new Picture ('imgs/bathroom.jpg', 'iPad TP Stand');
new Picture ('imgs/boots.jpg', 'Rain Flops');
new Picture ('imgs/breakfast.jpg', 'Do it all Breakfast Machine');
new Picture ('imgs/bubblegum.jpg', 'Meatball Gum');
new Picture ('imgs/chair.jpg', 'Chair');
new Picture ('imgs/cthulhu.jpg', 'Cthulhu Statue');
new Picture ('imgs/dog-duck.jpg', 'Doggo Duck Lips');
new Picture ('imgs/dragon.jpg', 'Dragon Meat');
new Picture ('imgs/pen.jpg', 'Penware Caps');
new Picture ('imgs/pet-sweep.jpg', 'Pet Sweepers');
new Picture ('imgs/scissors.jpg', 'Pizza Scissors');
new Picture ('imgs/shark.jpg', 'Shark Attack Sleeping Bag');
new Picture ('imgs/sweep.jpg', 'Baby Swiffer');
new Picture ('imgs/tauntaun.jpg', 'TaunTaun Blanket');
new Picture ('imgs/unicorn.jpg', 'Unicorn Meat');
new Picture ('imgs/usb.gif', 'Tentacle USB Drive');
new Picture ('imgs/water-can.jpg', 'Shower Can');
new Picture ('imgs/wine-glass.jpg', 'Egg Glass');

console.table(allPictures);