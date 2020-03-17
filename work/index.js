var canvas = document.getElementById('canvas'),
stage = new createjs.Stage(canvas);

TweenMax.ticker.addEventListener("tick", stage.update, stage);
TweenMax.ticker.fps(60);

// background 1

var background1 = new createjs.Shape();
background1.graphics
.beginFill("#043245")
.rect(0, 0, 800, 600)
.endFill();
stage.addChild(background1);

// triangle1

var triangle1 = new createjs.Shape();
stage.addChild(triangle1);
triangle1.x = -600;
triangle1.y = -1600;

var ta = {
	p0x: 0,
	p0y: 0,
	p1x: 2000,
	p1y: 0,
	p2x: 1000,
	p2y: 1600,
};

triangle1.graphics
.beginFill("#FCFCFC")
.mt(ta.p0x, ta.p0y)
.lt(ta.p1x, ta.p1y)
.lt(ta.p2x, ta.p2y)
.cp()
.endFill();

// triangle2

var triangle2 = new createjs.Shape();
stage.addChild(triangle2);
triangle2.x = -600;
triangle2.y = -1800;


triangle2.graphics
.beginFill("#E83530")
.mt(ta.p0x, ta.p0y)
.lt(ta.p1x, ta.p1y)
.lt(ta.p2x, ta.p2y)
.cp()
.endFill();

// triangle3

var triangle3 = new createjs.Shape();
stage.addChild(triangle3);
triangle3.x = -600;
triangle3.y = -2000;

triangle3.graphics
.beginFill("#F7A91B")
.mt(ta.p0x, ta.p0y)
.lt(ta.p1x, ta.p1y)
.lt(ta.p2x, ta.p2y)
.cp()
.endFill();

// triangle4

var triangle4 = new createjs.Shape();
stage.addChild(triangle4);
triangle4.x = -600;
triangle4.y = -2200;

triangle4.graphics
.beginFill("#F7D9A7")
.mt(ta.p0x, ta.p0y)
.lt(ta.p1x, ta.p1y)
.lt(ta.p2x, ta.p2y)
.cp()
.endFill();

TweenMax.to(triangle1, 2, {y: 0, ease: Power1.easeInOut});
TweenMax.to(triangle2, 2.1, {y: 0, ease: Power1.easeInOut});
TweenMax.to(triangle3, 2.2, {y: 0, ease: Power1.easeInOut});
TweenMax.to(triangle4, 2.3, {y: 0, ease: Power1.easeInOut});




/*var tl = new TimelineMax({repeat : 0});

tl.to(triangle1, 1, {y: 250, ease: Power1.easeInOut});
tl.to(triangle2, 1, {y: 250, ease: Power1.easeInOut});
tl.to(triangle3, 1, {y: 250, ease: Power1.easeInOut});



// rectangle 

/*var rect = new createjs.Shape();
stage.addChild(rect);
rect.x = 320;
rect.y = 220;
rect.scaleX = 0;
rect.scaleY = 0;

var a = {
	p0x: 0,
	p0y: 0,
	p1x: 150,
	p1y: 0,
	p2x: 150,
	p2y: 150,
	p3x: 0,
	p3y: 150
};

rect.graphics
.beginFill("blue")
.mt(a.p0x, a.p0y)
.lt(a.p1x, a.p1y)
.lt(a.p2x, a.p2y)
.lt(a.p3x, a.p3y)
.cp()
.endFill();*/

//TweenMax.to(rect, 2, {scaleX:1, scaleY:1, rotation:315, ease: Power1.easeInOut});



/*var a = {
	p0x: 0,
	p0y: 0,
	p1x: 10,
	p1y: 0
};

c.graphics
.beginStroke("rgb(25,175,25,1)")
.setStrokeStyle(4)
.mt(a.p0x, a.p0y)
.lt(a.p1x, a.p1y)
.endStroke();

TweenMax.to(a, 1, {
	p0x: 0,
	p0y: 0,
	p1x: 400,
	p1y: 0,
	onUpdate: function () {
		c.graphics
		.beginStroke("rgb(25,175,25,1)")
		.setStrokeStyle(4)
		.mt(a.p0x, a.p0y)
		.lt(a.p1x, a.p1y)
		.endStroke();
	},
}); */