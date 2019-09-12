'use strict';

//pull in all of my html elements that I will be rendering with js
var productContainerEl = document.getElementById('product-container');

var resultsEl = document.getElementById('results');

var productOneEl = document.getElementById('product1');

var productTwoEl = document.getElementById('product2');

var productThreeEl = document.getElementById('product3');

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
new Product('bag', 'bag.jpg');
new Product('banana', 'banana.jpg');
new Product('bathroom', 'bathroom.jpg');
new Product('boots', 'boots.jpg');
new Product('breakfast', 'breakfast.jpg');
new Product('bubblegum', 'bubblegum.jpg');
new Product ('chair', 'chair.jpg');
new Product('cthulhu', 'cthulhu.jpg');
new Product('dog-duck', 'dog-duck.jpg');
new Product('dragon', 'dragon.jpg');
new Product('pen', 'pen.jpg');
new Product('pet-sweep', 'pet-sweep.jpg');
new Product('scissors', 'scissors.jpg');
new Product('shark', 'shark.jpg');
new Product('sweep', 'sweep.png');
new Product('tauntaun', 'tauntaun.jpg');
new Product('unicorn', 'unicorn.jpg');
new Product('usb', 'usb.gif');
new Product('water-can', 'water-can.jpg');
new Product('wine-glass', 'wine-glass.jpg');

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

  //use .shift to remove the element at the zero index and shift the values
  if(recentRandomNumbers.length > 3){
    recentRandomNumbers.shift();
  }

  //push the random nubmers generated in the random index variable into the recent random numbers array
  recentRandomNumbers.push(randomIndex);

  //increment the number of views for each product at the random index value
  allProducts[randomIndex].views++;

  //push source, alt, and title of product one to the DOM
  productOneEl.src = allProducts[randomIndex].src;
  productOneEl.alt = allProducts[randomIndex].name;
  productOneEl.title = allProducts[randomIndex].name;


  //use var to store random index number for product 2
  randomIndex = random(0, allProducts.length - 1);

  while(recentRandomNumbers.includes(randomIndex)){

    randomIndex = random(0, allProducts.length - 1);

  }


  if(recentRandomNumbers.length > 3) {
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


  if(recentRandomNumbers.length > 3) {
    recentRandomNumbers.shift();
  }

  allProducts[randomIndex].views++;

  productThreeEl.src = allProducts[randomIndex].src;
  productThreeEl.alt = allProducts[randomIndex].name;
  productThreeEl.title = allProducts[randomIndex].name;

}

function renderBestProduct() {
  var bestProduct;
  var temp = 0;

  for(var i =0; i < allProducts.length; i++){
    if(allProducts[i].votes > temp) {
      temp = allProducts[i].votes;
      bestProduct = allProducts[i];
    }
  }

  var h2El = document.createElement('h2');
  h2El.textContent = `The product with the most votes is ${bestProduct} with ${bestProduct.votes} votes.`;
  resultsEl.appendChild(h2El);
}

productContainerEl.addEventListener('click', handleClick);

function handleClick(e){
  var productName = e.target.title;
  
}






render();


