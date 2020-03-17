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
tl.to(triangle3, 1, {y: 250, ease: Power1.easeInOut});*/

// circle


var circleDash = new createjs.Shape();
stage.addChild(circleDash);
circleDash.x = 427;
circleDash.y = 330;
circleDash.scaleX = 0;
circleDash.scaleY = 0;
circleDash.regX = 64;
circleDash.regY = 64;

var a0 = {
	c2p0x0: 28,
	c2p0y0: -28,
	c2p0x1: 72,
	c2p0y1: -28,
	c2p1x0: 128,
	c2p1y0: 28,
	c2p1x1: 128,
	c2p1y1: 72,
	c2p2x0: 72,
	c2p2y0: 128,
	c2p2x1: 28,
	c2p2y1: 128,
	c2p3x0: -28,
	c2p3y0: 72,
	c2p3x1: -28,
	c2p3y1: 28
};

circleDash.graphics
.beginStroke("white")
.setStrokeStyle(12)
.setStrokeDash([2, 18], 22)
.mt(0, 0)
.bt(a0.c2p0x0, a0.c2p0y0, a0.c2p0x1, a0.c2p0y1, 100, 0)
.bt(a0.c2p1x0, a0.c2p1y0, a0.c2p1x1, a0.c2p1y1, 100, 100)
.bt(a0.c2p2x0, a0.c2p2y0, a0.c2p2x1, a0.c2p2y1, 0, 100)
.bt(a0.c2p3x0, a0.c2p3y0, a0.c2p3x1, a0.c2p3y1, 0, 0)
.cp()
.endStroke();

TweenMax.to(circleDash, 0.5, {scaleX:2, scaleY:2, ease: Power1.easeInOut, delay: 4});
TweenMax.to(circleDash, 0.3, {alpha: 0, ease: Power1.easeInOut, delay: 4.5});

// rectangle 

var rect = new createjs.Shape();
stage.addChild(rect);
rect.x = 400;
rect.y = 300;
rect.scaleX = 0;
rect.scaleY = 0;
rect.regX = 75;
rect.regY = 75;

var rectbesie = {
	rectp0x0: 150,
	rectp0y0: 0,
	rectp0x1: 0,
	rectp0y1: 0,
	rectp1x0: 150,
	rectp1y0: 150,
	rectp1x1: 150,
	rectp1y1: 0,
	rectp2x0: 0,
	rectp2y0: 150,
	rectp2x1: 150,
	rectp2y1: 150,
	rectp3x0: 0,
	rectp3y0: 0,
	rectp3x1: 0,
	rectp3y1: 150,
};

rect.graphics
.beginFill("#5DA7FF")
.mt(0, 0)
.bt(rectbesie.rectp0x0, rectbesie.rectp0y0, rectbesie.rectp0x1, rectbesie.rectp0y1, 150, 0)
.bt(rectbesie.rectp1x0, rectbesie.rectp1y0, rectbesie.rectp1x1, rectbesie.rectp1y1, 150, 150)
.bt(rectbesie.rectp2x0, rectbesie.rectp2y0, rectbesie.rectp2x1, rectbesie.rectp2y1, 0, 150)
.bt(rectbesie.rectp3x0, rectbesie.rectp3y0, rectbesie.rectp3x1, rectbesie.rectp3y1, 0, 0)
.cp()
.endStroke();

TweenMax.to(rect, 1.5, {scaleX:1, scaleY:1, rotation: 675, ease: Power1.easeInOut, delay: 2.5});

TweenMax.to(rectbesie, 1, {
	rectp0x0: 42,
	rectp0y0: -42,
	rectp0x1: 108,
	rectp0y1: -42,
	rectp1x0: 192,
	rectp1y0: 42,
	rectp1x1: 192,
	rectp1y1: 108,
	rectp2x0: 108,
	rectp2y0: 192,
	rectp2x1: 42,
	rectp2y1: 192,
	rectp3x0: -42,
	rectp3y0: 108,
	rectp3x1: -42,
	rectp3y1: 42,
	onUpdate: function () {
		rect.graphics
		.clear()
		.beginFill("#5DA7FF")
		.mt(0, 0)
		.bt(rectbesie.rectp0x0, rectbesie.rectp0y0, rectbesie.rectp0x1, rectbesie.rectp0y1, 150, 0)
		.bt(rectbesie.rectp1x0, rectbesie.rectp1y0, rectbesie.rectp1x1, rectbesie.rectp1y1, 150, 150)
		.bt(rectbesie.rectp2x0, rectbesie.rectp2y0, rectbesie.rectp2x1, rectbesie.rectp2y1, 0, 150)
		.bt(rectbesie.rectp3x0, rectbesie.rectp3y0, rectbesie.rectp3x1, rectbesie.rectp3y1, 0, 0)
		.cp()
		.endStroke();
		}, delay: 4.8
});








/*var rect1 = new createjs.Shape();
stage.addChild(rect1);
rect1.x = 400;
rect1.y = 300;
rect1.regX = 75;
rect1.regY = 75;

var a = {
	p0x: 75,
	p0y: -32,
	p1x: 160,
	p1y: 50,
	p2x: 120,
	p2y: 160,
	p3x: 10,
	p3y: 180,
	p4x: -61,
	p4y: 40
};

rect1.graphics
.beginFill("red")
.mt(a.p0x, a.p0y)
.lt(a.p1x, a.p1y)
.lt(a.p2x, a.p2y)
.lt(a.p3x, a.p3y)
.lt(a.p4x, a.p4y)
.cp()
.endFill();*/