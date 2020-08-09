//Create variables here
var  dog, dogImg , happyDogImg ,dataBase ,happyDog, foodS, foodStock ,dogeat , shreya , shreyaImg ;
var foodRemaining = 30;
var foodObj , fedTime , lastFed ;
var foodCount ;

function preload()
{
  //load images here
  dogImg = loadImage("dogImg.png");
  happyDogImg = loadImage("dogImg1.png");
  shreyaImg = loadImage("Shreya.jpg");
	
}

function setup() {

  dataBase = firebase.database();
  createCanvas(700, 500);
  
  dog = createSprite(480,290,50,50);
  dog.addImage(dogImg);
  dog.scale = 0.3;

  shreya = createSprite(200,250,50,50);
  shreya.addImage(shreyaImg,0,0);
  shreya.scale = 1.5;


  foodStock = dataBase.ref("Food");
  foodStock.on("value",readStock);

  foodObj = new Food();

  feed = createButton("Feed Jimmy ");
  feed.position(400,95);
  feed.mousePressed(feedDog);

  addFood = createButton(" Add Food ");
  addFood.position(300,95);
  addFood.mousePressed(addFoods);



}


function draw() {  

  background(0, 129, 85);

  
  foodObj.display();    


  drawSprites();

  fedTime = dataBase.ref('FedTime');
  fedTime.on("value" ,function(data){
    lastFed = data.val();
  })

  fill(255,255,254);
  textSize(15);
  if(lastFed >= 12){
    text("Last Fed : ", lastFed%12 + "PM" , 350,30);  
  } else if (lastFed === 0){
    text("Last Fed : 12 AM",350,30 );
  } else {
    text("Last Fed : " + lastFed + "AM" ,350,30);
  }
  
  textSize(20);
  fill("yellow");
  text("PRESS THE UP ARROW TO FEED JIMMY MILK",40,50);
  textSize(15);
  text("Food Remaining:" + foodRemaining,40,100);

}

function readStock (data){
    foodS = data.val();
}

function writeStock (x){

  dataBase.ref('/').update({
    Food: x
  })
}

function feedDog (){
  dog.addImage(happyDogImg);
  dog.scale = 0.3;

  foodObj.updateFoodStock(foodObj.getFoodStock() - 1);
  database.ref('/').update({
    Food: foodObj.getFoodStock(),
    FeedTime: hour()
  })

}

function addFoods (){
  foodS++;
  dataBase.ref('/').update({
    Food: foodS
  })
}