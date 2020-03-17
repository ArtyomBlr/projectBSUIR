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

TweenMax.to(rect, 2, {rotation: 1, ease: Power1.easeInOut, delay: 4.8});


// circleAdditional1

var circleAdd1 = new createjs.Shape();
stage.addChild(circleAdd1);
circleAdd1.x = 400;
circleAdd1.y = 300;
circleAdd1.scaleX = 0;
circleAdd1.scaleY = 0;
circleAdd1.regX = 75;
circleAdd1.regY = 75;

var b1 = {
	cAp0x0: 42,
	cAp0y0: -42,
	cAp0x1: 108,
	cAp0y1: -42,
	cAp1x0: 192,
	cAp1y0: 42,
	cAp1x1: 192,
	cAp1y1: 108,
	cAp2x0: 108,
	cAp2y0: 192,
	cAp2x1: 42,
	cAp2y1: 192,
	cAp3x0: -42,
	cAp3y0: 108,
	cAp3x1: -42,
	cAp3y1: 42,
};

circleAdd1.graphics
.beginStroke("#FFAB65")
.setStrokeStyle(8)
.mt(0, 0)
.bt(b1.cAp0x0, b1.cAp0y0, b1.cAp0x1, b1.cAp0y1, 150, 0)
.bt(b1.cAp1x0, b1.cAp1y0, b1.cAp1x1, b1.cAp1y1, 150, 150)
.bt(b1.cAp2x0, b1.cAp2y0, b1.cAp2x1, b1.cAp2y1, 0, 150)
.bt(b1.cAp3x0, b1.cAp3y0, b1.cAp3x1, b1.cAp3y1, 0, 0)
.cp()
.endStroke();

TweenMax.to(circleAdd1, 0.5, {scaleX:1.1, scaleY:1.1, ease: Power1.easeInOut, delay: 5});
TweenMax.to(circleAdd1, 0.3, {alpha: 0, ease: Power1.easeInOut, delay: 5.5});


// circleAdditional3

var circleAdd3 = new createjs.Shape();
stage.addChild(circleAdd3);
circleAdd3.x = 430;
circleAdd3.y = 200;
circleAdd3.scaleX = 0;
circleAdd3.scaleY = 0;
circleAdd3.regX = 75;
circleAdd3.regY = 75;

var b3 = {
	cCp0x0: 42,
	cCp0y0: -42,
	cCp0x1: 108,
	cCp0y1: -42,
	cCp1x0: 192,
	cCp1y0: 42,
	cCp1x1: 192,
	cCp1y1: 108,
	cCp2x0: 108,
	cCp2y0: 192,
	cCp2x1: 42,
	cCp2y1: 192,
	cCp3x0: -42,
	cCp3y0: 108,
	cCp3x1: -42,
	cCp3y1: 42,
};

circleAdd3.graphics
.beginStroke("#CCC5C4")
.setStrokeStyle(24)
.mt(0, 0)
.bt(b3.cCp0x0, b3.cCp0y0, b3.cCp0x1, b3.cCp0y1, 150, 0)
.bt(b3.cCp1x0, b3.cCp1y0, b3.cCp1x1, b3.cCp1y1, 150, 150)
.bt(b3.cCp2x0, b3.cCp2y0, b3.cCp2x1, b3.cCp2y1, 0, 150)
.bt(b3.cCp3x0, b3.cCp3y0, b3.cCp3x1, b3.cCp3y1, 0, 0)
.cp()
.endStroke();

TweenMax.to(circleAdd3, 0.4, {scaleX:0.25, scaleY:0.25, ease: Power1.easeInOut, delay: 5.3});
TweenMax.to(circleAdd3, 0.1, {alpha: 0, ease: Power1.easeInOut, delay: 5.6});


// circleAdditional4

var circleAdd4 = new createjs.Shape();
stage.addChild(circleAdd4);
circleAdd4.x = 490;
circleAdd4.y = 330;
circleAdd4.scaleX = 0;
circleAdd4.scaleY = 0;
circleAdd4.regX = 75;
circleAdd4.regY = 75;

var b4 = {
	cDp0x0: 42,
	cDp0y0: -42,
	cDp0x1: 108,
	cDp0y1: -42,
	cDp1x0: 192,
	cDp1y0: 42,
	cDp1x1: 192,
	cDp1y1: 108,
	cDp2x0: 108,
	cDp2y0: 192,
	cDp2x1: 42,
	cDp2y1: 192,
	cDp3x0: -42,
	cDp3y0: 108,
	cDp3x1: -42,
	cDp3y1: 42,
};

circleAdd4.graphics
.beginStroke("#2F3841")
.setStrokeStyle(24)
.mt(0, 0)
.bt(b4.cDp0x0, b4.cDp0y0, b4.cDp0x1, b4.cDp0y1, 150, 0)
.bt(b4.cDp1x0, b4.cDp1y0, b4.cDp1x1, b4.cDp1y1, 150, 150)
.bt(b4.cDp2x0, b4.cDp2y0, b4.cDp2x1, b4.cDp2y1, 0, 150)
.bt(b4.cDp3x0, b4.cDp3y0, b4.cDp3x1, b4.cDp3y1, 0, 0)
.cp()
.endStroke();

TweenMax.to(circleAdd4, 0.4, {scaleX:0.3, scaleY:0.3, ease: Power1.easeInOut, delay: 5.3});
TweenMax.to(circleAdd4, 0.1, {alpha: 0, ease: Power1.easeInOut, delay: 5.7});


// circleAdditional2

var circleAdd2 = new createjs.Shape();
stage.addChild(circleAdd2);
circleAdd2.x = 300;
circleAdd2.y = 300;
circleAdd2.scaleX = 0;
circleAdd2.scaleY = 0;
circleAdd2.regX = 75;
circleAdd2.regY = 75;

var b2 = {
	cBp0x0: 42,
	cBp0y0: -42,
	cBp0x1: 108,
	cBp0y1: -42,
	cBp1x0: 192,
	cBp1y0: 42,
	cBp1x1: 192,
	cBp1y1: 108,
	cBp2x0: 108,
	cBp2y0: 192,
	cBp2x1: 42,
	cBp2y1: 192,
	cBp3x0: -42,
	cBp3y0: 108,
	cBp3x1: -42,
	cBp3y1: 42,
};

circleAdd2.graphics
.beginStroke("#4E7984")
.setStrokeStyle(10)
.mt(0, 0)
.bt(b2.cBp0x0, b2.cBp0y0, b2.cBp0x1, b2.cBp0y1, 150, 0)
.bt(b2.cBp1x0, b2.cBp1y0, b2.cBp1x1, b2.cBp1y1, 150, 150)
.bt(b2.cBp2x0, b2.cBp2y0, b2.cBp2x1, b2.cBp2y1, 0, 150)
.bt(b2.cBp3x0, b2.cBp3y0, b2.cBp3x1, b2.cBp3y1, 0, 0)
.cp()
.endStroke();

TweenMax.to(circleAdd2, 0.5, {scaleX:0.6, scaleY:0.6, ease: Power1.easeInOut, delay: 5.3});
TweenMax.to(circleAdd2, 0.1, {alpha: 0, ease: Power1.easeInOut, delay: 5.7});




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