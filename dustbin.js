class Dustbin {

    constructor(x,y,width,height){
    var box_options = {
        isStatic: true
    
    }

       
      this.body = Bodies.rectangle(x,y,width,height,box_options);
      World.add(world,this.body);
      this.width=width;
      this.height=height;
      this.image = loadImage("dustbingreen.png");
      

    }
    display(){
    
        var pos=this.body.position;
         
        imageMode(CENTER);
        fill('red');
        image(this.image,pos.x,pos.y,this.width,this.height); 
    
        }
    }