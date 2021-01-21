var dog, dog_img;
var happyDog;
var database;
var foodS = 50, foodStock;
var Food;

function preload() {
  dog_img = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(800, 700);
  database = firebase.database();
  console.log(database);
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  dog = createSprite(400, 350, 20, 20);
  dog.scale = 0.2;
  dog.addImage(dog_img);
}


function draw() {

  background("green");
  if (keyWentDown(UP_ARROW)) {
    foodS = foodS - 1;
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  if (foodS === 0) {
    foodS = 50;
  }

  fill("blue");
  stroke("Yellow");
  strokeWeight(5);
  text("NOTE : Press UP_ARROW TO FEED DRAGOW THE MILK", 200, 100);
  drawSprites();
}

function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {
  database.ref('/').update({
    Food: x
  })
}



