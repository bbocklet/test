(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"assesmentone_atlas_1", frames: [[0,0,1930,1242]]},
		{name:"assesmentone_atlas_2", frames: [[0,0,1930,1242]]},
		{name:"assesmentone_atlas_3", frames: [[0,0,1930,1242]]},
		{name:"assesmentone_atlas_4", frames: [[0,0,1930,1242]]},
		{name:"assesmentone_atlas_5", frames: [[0,0,1930,1242]]},
		{name:"assesmentone_atlas_6", frames: [[0,0,1930,1242]]},
		{name:"assesmentone_atlas_7", frames: [[0,0,1895,1233]]},
		{name:"assesmentone_atlas_8", frames: [[0,0,1895,1233]]},
		{name:"assesmentone_atlas_9", frames: [[0,0,1895,1233]]},
		{name:"assesmentone_atlas_10", frames: [[0,0,1895,1233]]},
		{name:"assesmentone_atlas_11", frames: [[0,0,1895,1233]]},
		{name:"assesmentone_atlas_12", frames: [[0,0,1895,1233]]},
		{name:"assesmentone_atlas_13", frames: [[0,0,1895,1233]]},
		{name:"assesmentone_atlas_14", frames: [[0,0,1895,1233]]},
		{name:"assesmentone_atlas_15", frames: [[0,0,1895,1233]]},
		{name:"assesmentone_atlas_16", frames: [[0,0,1895,1233]]},
		{name:"assesmentone_atlas_17", frames: [[0,1777,227,227],[229,1777,227,227],[458,1777,227,227],[822,1235,275,779],[0,1235,820,540],[0,0,1895,1233]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._1st = function() {
	this.initialize(ss["assesmentone_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.backgroundpngcopy = function() {
	this.initialize(ss["assesmentone_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ball2 = function() {
	this.initialize(ss["assesmentone_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ballone = function() {
	this.initialize(ss["assesmentone_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.baseball = function() {
	this.initialize(ss["assesmentone_atlas_17"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.baseballpngcopy = function() {
	this.initialize(ss["assesmentone_atlas_17"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.baseballpngcopy2 = function() {
	this.initialize(ss["assesmentone_atlas_17"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.chnageofheart = function() {
	this.initialize(ss["assesmentone_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.click = function() {
	this.initialize(ss["assesmentone_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.coach = function() {
	this.initialize(ss["assesmentone_atlas_17"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.confettie = function() {
	this.initialize(ss["assesmentone_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.end = function() {
	this.initialize(ss["assesmentone_atlas_11"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.endtext = function() {
	this.initialize(ss["assesmentone_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.haha = function() {
	this.initialize(ss["assesmentone_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.medal = function() {
	this.initialize(ss["assesmentone_atlas_12"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pizzaz = function() {
	this.initialize(ss["assesmentone_atlas_13"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.scared = function() {
	this.initialize(ss["assesmentone_atlas_14"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.scaredkids = function() {
	this.initialize(ss["assesmentone_atlas_17"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.scarykids = function() {
	this.initialize(ss["assesmentone_atlas_15"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.smilewalk = function() {
	this.initialize(ss["assesmentone_atlas_16"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.speech = function() {
	this.initialize(ss["assesmentone_atlas_17"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.thend = function() {
	this.initialize(ss["assesmentone_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.thend();
	this.instance.setTransform(-200,-128.7,0.2073,0.2072);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-128.7,400,257.4);


(lib.Tween29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.thend();
	this.instance.setTransform(-299.5,-95.95,0.2741,0.274,-14.9988);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-299.5,-232.8,599.1,465.6);


(lib.Tween28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.thend();
	this.instance.setTransform(-230,-148,0.2383,0.2383);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230,-148,460,296);


(lib.Tween27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.thend();
	this.instance.setTransform(-260.45,-83.4,0.2383,0.2383,-14.9981);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-260.4,-202.4,520.9,404.9);


(lib.Tween26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.thend();
	this.instance.setTransform(-200,-128.7,0.2073,0.2072);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-128.7,400,257.4);


(lib.Tween25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.baseballpngcopy();
	this.instance.setTransform(-10,-10,0.0881,0.0881);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,20,20);


(lib.Tween24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.baseballpngcopy();
	this.instance.setTransform(-10,-10,0.0881,0.0881);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,20,20);


(lib.Tween23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.baseballpngcopy();
	this.instance.setTransform(-10,-10,0.0881,0.0881);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,20,20);


(lib.Tween22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.baseballpngcopy();
	this.instance.setTransform(-10,-10,0.0881,0.0881);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,20,20);


(lib.Tween21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.confettie();
	this.instance.setTransform(-158.7,-175.75,0.206,0.2072,15.0002);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225.3,-175.7,450.6,351.5);


(lib.Tween20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.confettie();
	this.instance.setTransform(-198.8,-128.7,0.206,0.2072);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.8,-128.7,397.6,257.4);


(lib.Tween19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.confettie();
	this.instance.setTransform(-158.75,-175.75,0.206,0.2072,14.9991);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225.3,-175.7,450.70000000000005,351.5);


(lib.Tween18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.confettie();
	this.instance.setTransform(-198.8,-128.7,0.206,0.2072);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.8,-128.7,397.70000000000005,257.4);


(lib.Tween17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pizzaz();
	this.instance.setTransform(-226.85,-73.95,0.211,0.211,-15.0008);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226.8,-177.4,453.6,354.8);


(lib.Tween16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pizzaz();
	this.instance.setTransform(-200,-130.1,0.2111,0.2111);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-130.1,400,260.29999999999995);


(lib.Tween15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.medal();
	this.instance.setTransform(-200,-150,0.2111,0.2433);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-150,400,300);


(lib.Tween14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.medal();
	this.instance.setTransform(-200,-150,0.2111,0.2433);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-150,400,300);


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._1st();
	this.instance.setTransform(-212.3,-131.95,0.2111,0.2433,-5.0015);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.3,-166.8,424.6,333.70000000000005);


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._1st();
	this.instance.setTransform(-170.9,-182.4,0.2111,0.2433,9.9976);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-223,-182.4,446,364.9);


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ball2();
	this.instance.setTransform(-200,-131.5,0.2111,0.2133);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-131.5,400,263);


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ball2();
	this.instance.setTransform(-200,-131.5,0.2111,0.2133);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-131.5,400,263);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ballone();
	this.instance.setTransform(-200,-130.1,0.2111,0.2111);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-130.1,400,260.29999999999995);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ballone();
	this.instance.setTransform(-200,-130.1,0.2111,0.2111);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-130.1,400,260.29999999999995);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.coach();
	this.instance.setTransform(27.2,-77,0.1979,0.1977,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.2,-77,54.4,154);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.coach();
	this.instance.setTransform(-27.2,-77,0.1979,0.1977);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.2,-77,54.4,154);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.baseball();
	this.instance.setTransform(-10,-10,0.0881,0.0881);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,20,20);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.baseball();
	this.instance.setTransform(-10,-10,0.0881,0.0881);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,20,20);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.scared();
	this.instance.setTransform(-175,-113.85,0.1847,0.1847);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-113.8,350,227.7);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.scared();
	this.instance.setTransform(-175,-113.85,0.1847,0.1847);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-113.8,350,227.7);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.smilewalk();
	this.instance.setTransform(0,0,0.2433,0.2433);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,461.1,300), null);


(lib.ballbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.baseballpngcopy2();
	this.instance.setTransform(61,0,0.5655,0.5375,29.9975);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172.2,169.9);


// stage content:
(lib.assesmentone = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.start_button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(345));

	// endcon
	this.instance = new lib.Tween26("synched",0);
	this.instance.setTransform(200,160.7);
	this.instance._off = true;

	this.instance_1 = new lib.Tween27("synched",0);
	this.instance_1.setTransform(200,160.65);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween28("synched",0);
	this.instance_2.setTransform(200,161);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween30("synched",0);
	this.instance_3.setTransform(200,160.7);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween29("synched",0);
	this.instance_4.setTransform(200,161);

	this.instance_5 = new lib.thend();
	this.instance_5.setTransform(0,32,0.2073,0.2072);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},320).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(320).to({_off:false},0).to({_off:true,y:160.65},5).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(320).to({_off:false},5).to({_off:true,y:161},4).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(325).to({_off:false},4).to({_off:true,y:160.7},7).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(329).to({_off:false},7).to({_off:true,y:161},4).wait(5));

	// theend
	this.instance_6 = new lib.endtext();
	this.instance_6.setTransform(0,28,0.2073,0.2072);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(320).to({_off:false},0).wait(25));

	// finalecon
	this.instance_7 = new lib.Tween18("synched",0);
	this.instance_7.setTransform(198.8,176.7);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween19("synched",0);
	this.instance_8.setTransform(198.35,204.65);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween20("synched",0);
	this.instance_9.setTransform(198.8,186.7);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween21("synched",0);
	this.instance_10.setTransform(198.3,210.65);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(269).to({_off:false},0).to({_off:true,x:198.35,y:204.65},6).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(269).to({_off:false},6).to({_off:true,x:198.8,y:186.7},15).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(275).to({_off:false},15).to({_off:true,x:198.3,y:210.65},16).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(290).to({_off:false},16).to({rotation:-15,y:190.6},13).to({_off:true},1).wait(25));

	// fianleball
	this.instance_11 = new lib.Tween25("synched",0);
	this.instance_11.setTransform(225,242);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween24("synched",0);
	this.instance_12.setTransform(210,262);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween22("synched",0);
	this.instance_13.setTransform(210,290);
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween23("synched",0);
	this.instance_14.setTransform(210,319);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},269).to({state:[{t:this.instance_12}]},10).to({state:[{t:this.instance_13}]},10).to({state:[{t:this.instance_14,p:{scaleX:1,scaleY:1,x:210,y:319}}]},9).to({state:[{t:this.instance_14,p:{scaleX:0.2073,scaleY:0.2072,x:43.5,y:119.1}}]},2).to({state:[]},1).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(269).to({_off:false},0).to({_off:true,x:210,y:262},10).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(269).to({_off:false},10).to({_off:true,y:290},10).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(279).to({_off:false},10).to({_off:true,y:319},9).wait(47));

	// finalemean
	this.instance_15 = new lib.chnageofheart();
	this.instance_15.setTransform(67,79,0.1813,0.1814);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(269).to({_off:false},0).wait(50).to({_off:true},1).wait(25));

	// finalekids
	this.instance_16 = new lib.end();
	this.instance_16.setTransform(-27,58,0.2111,0.2111);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(269).to({_off:false},0).wait(50).to({_off:true},1).wait(25));

	// lines
	this.instance_17 = new lib.Tween16("synched",0);
	this.instance_17.setTransform(204,191.1);
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween17("synched",0);
	this.instance_18.setTransform(204.05,171.75);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(209).to({_off:false},0).to({_off:true,x:204.05,y:171.75},13).wait(123));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(209).to({_off:false},13).to({rotation:15,x:200.8,y:189.75},11).to({rotation:0,x:198.5,y:177.45},11).to({rotation:15,x:200.7,y:196.35},11).to({regX:0.1,regY:0.1,rotation:0,x:198.55,y:182.45},13).to({_off:true},1).wait(76));

	// medal
	this.instance_19 = new lib.Tween14("synched",0);
	this.instance_19.setTransform(190,193);
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween15("synched",0);
	this.instance_20.setTransform(168,166);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(209).to({_off:false},0).to({_off:true,x:168,y:166},13).wait(123));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(209).to({_off:false},13).to({x:194,y:193},11).to({x:171.65,y:171.3},11).to({x:190.65,y:198.3},11).to({x:171.6,y:171.3},13).to({_off:true},1).wait(76));

	// first
	this.instance_21 = new lib.Tween12("synched",0);
	this.instance_21.setTransform(199,182.4);
	this.instance_21._off = true;

	this.instance_22 = new lib.Tween13("synched",0);
	this.instance_22.setTransform(184.05,182.35);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(209).to({_off:false},0).to({_off:true,x:184.05,y:182.35},13).wait(123));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(209).to({_off:false},13).to({rotation:-15,x:184},11).to({regX:0.1,regY:0.1,rotation:0,x:184.05,y:182.4},11).to({rotation:-15,y:182.35},11).to({rotation:0,x:184,y:182.3},13).to({_off:true},1).wait(76));

	// ball2
	this.instance_23 = new lib.Tween10("synched",0);
	this.instance_23.setTransform(200,185.5);
	this.instance_23._off = true;

	this.instance_24 = new lib.Tween11("synched",0);
	this.instance_24.setTransform(168,185.5);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(209).to({_off:false},0).to({_off:true,x:168},13).wait(123));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(209).to({_off:false},13).to({x:206},11).to({x:163},11).to({x:200.05},11).to({x:154.05},13).to({_off:true},1).wait(76));

	// ball
	this.instance_25 = new lib.Tween8("synched",0);
	this.instance_25.setTransform(207,177.1);
	this.instance_25._off = true;

	this.instance_26 = new lib.Tween9("synched",0);
	this.instance_26.setTransform(246,164.1);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(209).to({_off:false},0).to({_off:true,x:246,y:164.1},13).wait(123));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(209).to({_off:false},13).to({x:215,y:184.1},11).to({x:236,y:169.85},11).to({x:211,y:191.1},11).to({x:243,y:169.85},13).to({_off:true},1).wait(76));

	// speech
	this.instance_27 = new lib.speech();
	this.instance_27.setTransform(0,61,0.2111,0.2111);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(209).to({_off:false},0).wait(59).to({_off:true},1).wait(76));

	// justcoach
	this.instance_28 = new lib.Tween6("synched",0);
	this.instance_28.setTransform(200.2,223);
	this.instance_28._off = true;

	this.instance_29 = new lib.Tween7("synched",0);
	this.instance_29.setTransform(200.2,223);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_28}]},172).to({state:[{t:this.instance_29}]},22).to({state:[{t:this.instance_29}]},8).to({state:[{t:this.instance_29}]},6).to({state:[]},1).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(172).to({_off:false},0).to({_off:true},22).wait(151));

	// scaredkids
	this.instance_30 = new lib.scaredkids();
	this.instance_30.setTransform(4,195,0.1866,0.1866);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(171).to({_off:false},0).wait(37).to({_off:true},1).wait(136));

	// baseball
	this.instance_31 = new lib.Tween4("synched",0);
	this.instance_31.setTransform(232,244);
	this.instance_31._off = true;

	this.instance_32 = new lib.Tween5("synched",0);
	this.instance_32.setTransform(232,219);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_31}]},59).to({state:[{t:this.instance_31}]},7).to({state:[{t:this.instance_31}]},9).to({state:[{t:this.instance_31}]},11).to({state:[{t:this.instance_31}]},21).to({state:[{t:this.instance_31}]},11).to({state:[{t:this.instance_31}]},14).to({state:[{t:this.instance_31}]},10).to({state:[{t:this.instance_31}]},7).to({state:[{t:this.instance_31}]},7).to({state:[{t:this.instance_31}]},9).to({state:[{t:this.instance_31}]},6).to({state:[{t:this.instance_31}]},5).to({state:[{t:this.instance_31}]},7).to({state:[{t:this.instance_31}]},4).to({state:[{t:this.instance_31}]},10).to({state:[{t:this.instance_32}]},11).to({state:[]},1).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(59).to({_off:false},0).to({y:231.65},7).to({y:242.3},9).to({y:231.4},11).to({y:248.35},21).to({y:232.6},11).to({y:245.1},14).to({y:236.55},10).to({y:246.45},7).to({y:233.25},7).to({y:243.95},9).to({y:233.95},6).to({y:244.85},5).to({y:235.35},7).to({y:241.9},4).to({y:247},10).to({_off:true,y:219},11).wait(137));

	// scared
	this.instance_33 = new lib.Tween1("synched",0);
	this.instance_33.setTransform(-74,200.85);
	this.instance_33._off = true;

	this.instance_34 = new lib.Tween2("synched",0);
	this.instance_34.setTransform(150,200.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_33}]},53).to({state:[{t:this.instance_34}]},119).to({state:[]},1).wait(172));
	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(53).to({_off:false},0).to({_off:true,x:150},119).wait(173));

	// haha
	this.instance_35 = new lib.haha();
	this.instance_35.setTransform(-11.4,146.85,0.2331,0.2182,-15.0003);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(59).to({_off:false},0).wait(149).to({_off:true},1).wait(136));

	// scary
	this.instance_36 = new lib.scarykids();
	this.instance_36.setTransform(56,76,0.1979,0.1979);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(59).to({_off:false},0).wait(149).to({_off:true},1).wait(136));

	// animation
	this.instance_37 = new lib.Symbol1();
	this.instance_37.setTransform(-97.5,174,1,1,0,0,0,230.5,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(1).to({x:-85.35},0).wait(1).to({x:-73.25},0).wait(1).to({x:-61.15},0).wait(1).to({x:-49.05},0).wait(1).to({x:-36.95},0).wait(1).to({x:-24.85},0).wait(1).to({x:-12.75},0).wait(1).to({x:-0.65},0).wait(1).to({x:11.45},0).wait(1).to({x:23.55},0).wait(1).to({x:35.65},0).wait(1).to({x:47.75},0).wait(1).to({x:59.85},0).wait(1).to({x:71.95},0).wait(1).to({x:84.05},0).wait(1).to({x:96.15},0).wait(1).to({x:108.25},0).wait(1).to({x:120.35},0).wait(1).to({x:132.45},0).wait(1).to({x:144.6},0).wait(1).to({x:156.7},0).wait(1).to({x:168.8},0).wait(1).to({x:180.9},0).wait(1).to({x:193},0).wait(1).to({x:205.1},0).wait(1).to({x:217.2},0).wait(1).to({x:229.3},0).wait(1).to({x:241.35},0).wait(1).to({x:253.45},0).wait(1).to({x:265.55},0).wait(1).to({x:277.65},0).wait(1).to({x:289.75},0).wait(1).to({x:301.85},0).wait(1).to({x:313.95},0).wait(1).to({x:326.05},0).wait(1).to({x:338.15},0).wait(1).to({x:350.25},0).wait(1).to({x:362.35},0).wait(1).to({x:374.5},0).wait(1).to({x:386.6},0).wait(1).to({x:398.7},0).wait(1).to({x:410.8},0).wait(1).to({x:422.9},0).wait(1).to({x:435},0).wait(1).to({x:447.1},0).wait(1).to({x:459.2},0).wait(1).to({x:471.3},0).wait(1).to({x:483.4},0).wait(1).to({x:495.5},0).wait(1).to({x:507.6},0).wait(1).to({x:519.7},0).wait(1).to({x:531.8},0).wait(1).to({x:543.9},0).wait(1).to({x:556},0).wait(1).to({x:568.1},0).wait(1).to({x:580.2},0).wait(1).to({x:592.3},0).wait(1).to({x:604.45},0).to({_off:true},1).wait(286));

	// clickme
	this.instance_38 = new lib.click();
	this.instance_38.setTransform(-58.4,-30.4,0.2808,0.2758,2.9848);

	this.timeline.addTween(cjs.Tween.get(this.instance_38).to({_off:true},1).wait(344));

	// button
	this.start_button = new lib.ballbutton();
	this.start_button.name = "start_button";
	this.start_button.setTransform(194.4,176.45,1,1,0,0,0,86,84.9);
	new cjs.ButtonHelper(this.start_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.start_button).to({_off:true},1).wait(344));

	// Layer_5
	this.instance_39 = new lib.backgroundpngcopy();
	this.instance_39.setTransform(0,0,0.2111,0.2433);

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(319).to({_off:true},1).wait(25));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-128,78.2,963,330.40000000000003);
// library properties:
lib.properties = {
	id: '19563F78EBE542E9BF6E6CC00F8C3A86',
	width: 400,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/assesmentone_atlas_1.png?1679234130572", id:"assesmentone_atlas_1"},
		{src:"images/assesmentone_atlas_2.png?1679234130572", id:"assesmentone_atlas_2"},
		{src:"images/assesmentone_atlas_3.png?1679234130572", id:"assesmentone_atlas_3"},
		{src:"images/assesmentone_atlas_4.png?1679234130572", id:"assesmentone_atlas_4"},
		{src:"images/assesmentone_atlas_5.png?1679234130572", id:"assesmentone_atlas_5"},
		{src:"images/assesmentone_atlas_6.png?1679234130572", id:"assesmentone_atlas_6"},
		{src:"images/assesmentone_atlas_7.png?1679234130572", id:"assesmentone_atlas_7"},
		{src:"images/assesmentone_atlas_8.png?1679234130572", id:"assesmentone_atlas_8"},
		{src:"images/assesmentone_atlas_9.png?1679234130572", id:"assesmentone_atlas_9"},
		{src:"images/assesmentone_atlas_10.png?1679234130572", id:"assesmentone_atlas_10"},
		{src:"images/assesmentone_atlas_11.png?1679234130572", id:"assesmentone_atlas_11"},
		{src:"images/assesmentone_atlas_12.png?1679234130572", id:"assesmentone_atlas_12"},
		{src:"images/assesmentone_atlas_13.png?1679234130572", id:"assesmentone_atlas_13"},
		{src:"images/assesmentone_atlas_14.png?1679234130572", id:"assesmentone_atlas_14"},
		{src:"images/assesmentone_atlas_15.png?1679234130572", id:"assesmentone_atlas_15"},
		{src:"images/assesmentone_atlas_16.png?1679234130572", id:"assesmentone_atlas_16"},
		{src:"images/assesmentone_atlas_17.png?1679234130573", id:"assesmentone_atlas_17"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['19563F78EBE542E9BF6E6CC00F8C3A86'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;