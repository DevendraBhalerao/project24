class Iron{
	constructor(x,y,width,height)
	{
		var options={
        'restitution':0.8,
		'friction':3,
		'density':30
		}
	// assign options to the rubber ball
	
	this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, width, height, options);
		
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;
			var angle = this.body.angle;		
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("brown");
		    rect(0,0,this.width,this.height);
			

			pop();
	}

}