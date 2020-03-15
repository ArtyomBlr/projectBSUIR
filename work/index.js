var canvas = document.getElementById('canvas'),
stage = new createjs.Stage(canvas);

TweenMax.ticker.addEventListener("tick", stage.update, stage);
TweenMax.ticker.fps(60);

var rect = new createjs.Shape();
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
.endFill();

TweenMax.to(rect, 2, {scaleX:1, scaleY:1, rotation:315, ease: Power1.easeInOut});



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