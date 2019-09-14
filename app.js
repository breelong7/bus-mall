'use strict';

//pull in all of my html elements that I will be rendering with js
var productContainerEl = document.getElementById('product-container');

var resultsEl = document.getElementById('results');

var productOneEl = document.getElementById('product1');

var productTwoEl = document.getElementById('product2');

var productThreeEl = document.getElementById('product3');

var bestProductImgEl = document.getElementById('best-product');

//declare all array for all of my products
var allProducts = [];

//declare constructor function with name and source parameters
function Product(name, src){
  this.name = name;
  this.src = `img/${src}`;
  this.votes = 0;
  this.views = 0;

  allProducts.push(this);
}

//create new instances of Product function
new Product('R2D2 bag', 'bag.jpg');
new Product('Banana Slicer', 'banana.jpg');
new Product('Bathroom Multitasker', 'bathroom.jpg');
new Product('Toeless Rainboots', 'boots.jpg');
new Product('Breakfast Oven', 'breakfast.jpg');
new Product('Meatball Bubblegum', 'bubblegum.jpg');
new Product ('Weird Chir', 'chair.jpg');
new Product('Cthulhu', 'cthulhu.jpg');
new Product('Dog-duck Mask', 'dog-duck.jpg');
new Product('Dragon Meat', 'dragon.jpg');
new Product('Pen Utensils', 'pen.jpg');
new Product('Pet-sweep Footies', 'pet-sweep.jpg');
new Product('Pizza Scissors', 'scissors.jpg');
new Product('Shark Sleeping Bag', 'shark.jpg');
new Product('Baby Sweep', 'sweep.png');
new Product('Tauntaun', 'tauntaun.jpg');
new Product('Unicorn Meat', 'unicorn.jpg');
new Product('Tenticle usb', 'usb.gif');
new Product('Infinite water-can', 'water-can.jpg');
new Product('Undrinkable Wine Glass', 'wine-glass.jpg');

//declare recent random numbers array to store random numbers used. Use this information to prevent the same images from being displayed
var recentRandomNumbers = [];

var votesRemaining = 25;

//declare function to generate random index
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function render() {
  //declare var to store random index number
  var randomIndex = random(0, allProducts.length - 1);

  //use while loop to prevent the same image from being used for more than one product
  while(recentRandomNumbers.includes(randomIndex)){
    randomIndex = random(0, allProducts.length - 1);
  }

  recentRandomNumbers.push(randomIndex);
  //use .shift to remove the element at the zero index and shift the values
  if(recentRandomNumbers.length > 6){
    recentRandomNumbers.shift();
  }

  //increment the number of views for each product at the random index value
  allProducts[randomIndex].views++;

  //push source, alt, and title of product one to the DOM
  productOneEl.src = allProducts[randomIndex].src;
  productOneEl.alt = allProducts[randomIndex].name;
  productOneEl.title = allProducts[randomIndex].name;



  while(recentRandomNumbers.includes(randomIndex)){

    randomIndex = random(0, allProducts.length - 1);

  }

  recentRandomNumbers.push(randomIndex);


  if(recentRandomNumbers.length > 6) {
    recentRandomNumbers.shift();
  }

  allProducts[randomIndex].views++;

  productTwoEl.src = allProducts[randomIndex].src;
  productTwoEl.alt = allProducts[randomIndex].name;
  productTwoEl.title = allProducts[randomIndex].name;

  randomIndex = random(0, allProducts.length - 1);

  while(recentRandomNumbers.includes(randomIndex)){

    randomIndex = random(0, allProducts.length - 1);

  }

  recentRandomNumbers.push(randomIndex);


  if(recentRandomNumbers.length > 6) {
    recentRandomNumbers.shift();
  }

  allProducts[randomIndex].views++;

  productThreeEl.src = allProducts[randomIndex].src;
  productThreeEl.alt = allProducts[randomIndex].name;
  productThreeEl.title = allProducts[randomIndex].name;

}

function renderBestProduct() {
  var bestProduct;
  var bestProductImg;
  var temp = 0;

  for(var i = 0; i < allProducts.length; i++){
    if(allProducts[i].votes > temp) {
      temp = allProducts[i].votes;
      bestProduct = allProducts[i].name;
      bestProductImg = allProducts[i].src;

    }
  }

  var h2El = document.createElement('h2');
  h2El.textContent = `The product with the most votes is ${bestProduct} with ${temp} votes!`;
  resultsEl.appendChild(h2El);


  bestProductImgEl.src = bestProductImg;
}

productContainerEl.addEventListener('click', handleClick);

function handleClick(e){
  var productName = e.target.title;

  if(e.target.id === 'product-container') {
    alert('click on one of the three products displayed!');
  }

  if(votesRemaining === 0) {
    productContainerEl.removeEventListener('click', handleClick);
    renderBestProduct();
  }

  for(var i = 0; i < allProducts.length; i++){
    if(productName === allProducts[i].name){
      allProducts[i].votes++;
      votesRemaining--;
    }
  }
  render();
}

render();


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    //input names of products in the labels array
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      //input number of votes for each product
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
    }],
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
  },
});


