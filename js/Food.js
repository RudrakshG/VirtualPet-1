class Food{
    constructor(){
        var foodStock=0;
        var lastFed;
        this.image=loadImage("images/Milk.png");
    }
    updateFoodStock(){
        this.foodStock=foodStock;
    }
    getFoodStock(){
       return  this.lastFed=lastfed;

    }
    deductFood(){
        if(this.foodStock>0){
            this.foodStock=foodStock-1;
        }
    }
display(){
    var x=80,y=100;
    imageMode(CENTER);
    this.image(this.image,720,220,70,70);

    if(this.foodStock!=0){
        for(var i=0; i<this)
    }
}


}