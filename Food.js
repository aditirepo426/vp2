class Food {
    constructor(){
    
        this.image = loadImage("Milk.png");

        var foodStock;
        var lastFed;

    }

    getFoodStock(){
        foodStock = dataBase.ref('Food'); 
        foodStock.on("value",(data) =>{
        foodCount = data.val(); }) 
    } 

    updateFoodStock(count){
        dataBase.ref('/').update({
        foodCount: count }); 
    }

    deductFood(){
        writeStock(foodS);
        dog.addImage(happyDogImg,0,0);
        foodRemaining = foodRemaining - 1;
    }

    display(){

        var x = 80 , y = 100;

        imageMode(CENTER);
        image(this.image,200,470,70,70);

        if(this.foodStock != 0){
            for(var i = 0; i<this.foodStock; i++){
                if(i%10 === 0){
                    x =80;
                    y =y +50;
                }

                image(this.image,x,y,50,50);
                x = x+ 30;
            }
        }
    }

}


    
