class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.smokeImg = loadImage("sprites/smoke.png");
    this.trajectory = [];
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>2 && this.body.position.x>220){

    
    var position = [this.body.position.x, this.body.position.y];
    this.trajectory.push(position);
    }
    for(var i = 0; i<this.trajectory.length; i++){
      image(this.smokeImg, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
