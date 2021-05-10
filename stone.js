class Stone{
	constructor(x,y,width,height)
	{
		var options={
        'restitution':0.8,
		'friction':0.9,
		'density':12
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
			fill("black");
		    rect(0,0,this.width,this.height);
			

			pop();
	}

}