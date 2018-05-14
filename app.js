'use strict';

// ===========================
// declare global variables ||
// ===========================

// Create an array to store all the pictures
var allPictures = [];
// Create the image elements for my image table
var imgEl1 = document.getElementById('product1');
var imgEl2 = document.getElementById('product2');
var imgEl3 = document.getElementById('product3');
// Set a variable for the initial starting point of all images
var picture1Index = 0;
var picture2Index = 1;
var picture3Index = 2;

// ==================+++
// create constructor ||
// ==================+++

function Picture (src, name, htmlId) {
    this.imgSrc = src;
    this.imgName = name;
    this.htmlId = htmlId;
    // Create click tracker
    this.clicked = 0;
    this.displayCount = 0;
    // Push data to array
    allPictures.push(this);
};

// ==================+++++++
// create event listeners ||
// ==================+++++++

// First img
imgEl1.addEventListener('click', function() {
    allPictures[picture1Index].clicked++;
    allPictures[picture1Index].displayCount++;
    console.table(allPictures);
    chooseNewImgs();
});
// Second img
imgEl2.addEventListener('click', function() {
    allPictures[picture2Index].clicked++;
    allPictures[picture2Index].displayCount++;
    console.table(allPictures);
    chooseNewImgs();
});
// Third img
imgEl3.addEventListener('click', function() {
    allPictures[picture3Index].clicked++;
    allPictures[picture3Index].displayCount++;
    console.table(allPictures);
    chooseNewImgs();
});

// ==================++++++++++
// randomize images function ||
// ==================++++++++++

function chooseNewImgs (){
    // First img
    picture1Index = Math.floor(Math.random() * allPictures.length);
    imgEl1.src = allPictures[picture1Index].imgSrc;
    // Second img
    picture2Index = Math.floor(Math.random() * allPictures.length);
    imgEl2.src = allPictures[picture2Index].imgSrc;
    // Third img
    picture3Index = Math.floor(Math.random() * allPictures.length);
    imgEl3.src = allPictures[picture3Index].imgSrc;
};

// ==================+++++++
// create image instances ||
// ==================+++++++

new Picture ('imgs/bag.jpg', 'R2D2 Luggage', 'r2d2');
new Picture ('imgs/banana.jpg', 'Banana Slicer', 'nana-slicer');
new Picture ('imgs/bathroom.jpg', 'iPad TP Stand', 'tp-stand');
new Picture ('imgs/boots.jpg', 'Rain Flops', 'rain-flops');
new Picture ('imgs/breakfast.jpg', 'Do it all Breakfast Machine', 'breakfast-machine');
new Picture ('imgs/bubblegum.jpg', 'Meatball Gum', 'meatball-gum');
new Picture ('imgs/chair.jpg', 'Chair', 'idiot-chair');
new Picture ('imgs/cthulhu.jpg', 'Cthulhu Statue', 'cthulhu');
new Picture ('imgs/dog-duck.jpg', 'Doggo Duck Lips', 'doggo-lips');
new Picture ('imgs/dragon.jpg', 'Dragon Meat', 'dragon-meat');
new Picture ('imgs/pen.jpg', 'Penware Caps', 'penware');
new Picture ('imgs/pet-sweep.jpg', 'Pet Swiffer', 'pet-swiffer');
new Picture ('imgs/scissors.jpg', 'Pizza Scissors', 'pizza-scissors');
new Picture ('imgs/shark.jpg', 'Shark Attack Sleeping Bag', 'shark-bag');
new Picture ('imgs/sweep.png', 'Baby Swiffer', 'baby-swiffer');
new Picture ('imgs/tauntaun.jpg', 'TaunTaun Blanket', 'tauntaun');
new Picture ('imgs/unicorn.jpg', 'Unicorn Meat', 'unicorn-meat');
new Picture ('imgs/usb.gif', 'Tentacle USB Drive', 'tentacle-drive');
new Picture ('imgs/water-can.jpg', 'Water Can', 'water-can');
new Picture ('imgs/wine-glass.jpg', 'Egg Glass', 'wine-glass');

chooseNewImgs();