'use strict';

// ===========================
// declare global variables ||
// ===========================

// Create an array to store all the pictures
var allPictures = [];
var totalClicks = 0;
// var drawChart = false;
// Create the image elements for my image table
var imgEl1 = document.getElementById('product1');
var imgEl2 = document.getElementById('product2');
var imgEl3 = document.getElementById('product3');
// Link to HTML
var sectionEl = document.getElementById('img-table');
var resultsList = document.getElementById('selection-results');
// Set a variable for the initial starting point of all images
var picture1Index = 0;
var picture2Index = 0;
var picture3Index = 0;
// chart variables
var resultsChart;
var drawChart = false;
var productArr = [];
var votesArr = [];

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

// ==================++++++
// create event listener ||
// ==================++++++

// Define the event listener
sectionEl.addEventListener('click', sectionCallback);
// Callback function
function sectionCallback(event) {
    if(event.target.id) {
        totalClicks++;
        allPictures[event.target.id].clicked++;
        chooseNewImgs(); 
    } else {
        alert('Click on an image only.');
    }  
};

// ==================+
// helper functions ||
// ==================+

function chooseNewImgs () {
    // Call function to monitor clicks
    stopAt25();

    // Temporary storage for imgs
    var cantBeThis = [picture1Index, picture2Index, picture3Index];

    // First img 
    do {
        picture1Index = Math.floor(Math.random() * allPictures.length);
    } while (cantBeThis.includes(picture1Index));
    cantBeThis.push(picture1Index);
    // Second img
    do {
        picture2Index = Math.floor(Math.random() * allPictures.length);
    } while (cantBeThis.includes(picture2Index));
    cantBeThis.push(picture2Index)
    // Third img
    do {
        picture3Index = Math.floor(Math.random() * allPictures.length);
    } while (cantBeThis.includes(picture3Index));
    
    // First img src + display count
    imgEl1.src = allPictures[picture1Index].imgSrc;
    allPictures[picture1Index].displayCount++;
    imgEl1.id = picture1Index;
    // Second img src + display count
    imgEl2.src = allPictures[picture2Index].imgSrc;
    allPictures[picture1Index].displayCount++;
    imgEl2.id = picture2Index;
    // Third img src + display count
    imgEl3.src = allPictures[picture3Index].imgSrc;
    allPictures[picture1Index].displayCount++;
    imgEl3.id = picture3Index;
      
};
// Render the results after completing 25 selections
function renderResults () {
    for(var i in allPictures){
        var newLiEl = document.createElement('li');
        newLiEl.textContent = allPictures[i].imgName + ' clicked : ' + allPictures[i].clicked + ' times';
        resultsList.appendChild(newLiEl);
    }
};
// Prevent images from cycling past 25 selections
function stopAt25 () {
    if (totalClicks === 25) {
        renderResults();
        sectionEl.removeEventListener('click', sectionCallback);
        chartData();
        renderChart();
    }
};
// Function to update information in chart data arrays
function chartData () {
    for (var i in allPictures) {
        productArr[i] = allPictures[i].imgName;
        votesArr[i] = allPictures[i].clicked;
    }
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

// =================+++++++++
// create chart data       ||
// rendered using chart.js ||
// =================+++++++++

// declare data variables
var data = {
    labels: productArr,
    datasets: [{
        data: votesArr,
        label: 'Number of Votes',
        backgroundColor: [
            'blue'
        ],
        hoverBackgroundColor: [
            'gold'
        ]
    }]
};

// render chart
function renderChart() {
    var ctx = document.getElementById('results-chart').getContext('2d');
    resultsChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: data,
        options: {
            responsive: false,
            animation: {
                duration: 1000,
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    max: 10,
                    min: 0,
                    stepSize: 1.0
                }
            }]
        }
    });
    drawChart = true;
}

// =================
// function calls ||
// =================

chooseNewImgs();