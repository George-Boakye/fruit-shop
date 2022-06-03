let fruits = [
  {
    name: "Oranges",
    image: "./images/oranges.jpeg",
    description:
      "Oranges are a type of low calorie, highly nutritious citrus fruit..",
  },
  {
    name: "Mangoes",
    image: "./images/mangoes.webp",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing ...",
  },
  {
    name: "Strawberries",
    image: "./images/strawberries.jpeg",
    description: "OLorem ipsum, dolor sit amet consectetur adipisicing ...",
  },
  {
    name: "Pawpaw",
    image: "./images/pawpaw.jpeg",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing ...",
  },
  {
    name: "Banana",
    image: "./images/banana.jpeg",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing ...",
  },
  {
    name: "Apples",
    image: "./images/Apples.jpeg",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing ...",
  },
  {
    name: "Guava",
    image: "./images/guava.jpeg",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing ...",
  },

  {
    name: "Pineapples",
    image: "./images/pineapple.jpeg",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing ...",
  },
];

// get row container
let container = document.getElementById("row");

// loop through loop array and add this template to the container
for (let fruit in fruits) {
  container.innerHTML += ` <div class="col col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
    <div class="card" style="width: 18rem;">
      <img src=${fruits[fruit].image} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${fruits[fruit].name}</h5>
        <p class="card-text">${fruits[fruit].description}</p>
        <a href="#" class="btn btn-primary add_to_cart" id="oranges">Add to Cart</a>
        <a href="#" class="btn btn-danger add_to_cart" id="oranges">Delete Fruit</a>
      </div>
    </div>
  </div>`;
}

// create a counter and set to 0
let counter = 0;
// add 0 to the cart element to display 0
let cart = document.getElementById("cart");
cart.innerText = counter;

// get buttons in a list by their class name
let deleteButton = document.getElementsByClassName("btn btn-danger add_to_cart");
let buttons = document.getElementsByClassName("btn btn-primary add_to_cart");

// run a for loop on the button list
for (let button in buttons) {
    // set delete button to none 
  deleteButton[button].style.display = "none";
    //add an event listener to each button in the loop
  buttons[button].addEventListener("click", (e) => {
    deleteButton[button].style.display = "inline-block";
    e.preventDefault();
    counter += 1;
    cart.innerText = counter;
  });

  deleteButton[button].addEventListener("click", (e) => {
    e.preventDefault();
    if (counter != 0) {
      counter -= 1;
      cart.innerText = counter;
    }
    if (counter === 0) {
      deleteButton[button].style.display = "none";
    }
  });
}
