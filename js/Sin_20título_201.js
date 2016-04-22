(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 3,
	height: 1,
	fps: 35,
	color: "#009933",
	manifest: [
		{src:"images/poblacioncanina.jpg?1461103983816", id:"poblacioncanina"}
	]
};



// symbols:



(lib.poblacioncanina = function() {
	this.initialize(img.poblacioncanina);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,386);


(lib.Símbolo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.poblacioncanina();
	this.instance.setTransform(0,0,1.49,0.497);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,447,192);


// stage content:
(lib.PERRITO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 6
	this.text = new cjs.Text("FUNDACIÓN PATITAS DE CORAZON", "12px 'Viner Hand ITC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 259;
	this.text.setTransform(6.3,38,1.354,1.143);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,37);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(35));

	// Capa 4
	this.PERRITO = new lib.Símbolo3();
	this.PERRITO.setTransform(-135.9,72,1,1,0,0,0,223.5,96);

	this.timeline.addTween(cjs.Tween.get(this.PERRITO).wait(1).to({x:-131.5,y:68.9},0).wait(1).to({x:-127.1,y:65.8},0).wait(1).to({x:-122.8,y:62.6},0).wait(1).to({x:-118.4,y:59.5},0).wait(1).to({x:-114,y:56.3},0).wait(1).to({x:-109.6,y:53.2},0).wait(1).to({x:-105.2,y:50},0).wait(1).to({x:-100.8,y:46.9},0).wait(1).to({x:-96.5,y:43.7},0).wait(1).to({x:-92.1,y:40.6},0).wait(1).to({x:-87.7,y:37.4},0).wait(1).to({x:-83.3,y:34.3},0).wait(1).to({x:-78.9,y:31.1},0).wait(1).to({x:-74.6,y:28},0).wait(1).to({x:-70.2,y:24.8},0).wait(1).to({x:-65.8,y:21.7},0).wait(1).to({x:-61.4,y:18.5},0).wait(1).to({x:-57,y:15.4},0).wait(1).to({x:-52.6,y:12.3},0).wait(1).to({x:-48.3,y:9.1},0).wait(1).to({x:-43.9,y:6},0).wait(1).to({x:-39.5,y:2.8},0).wait(1).to({x:-35.1,y:-0.3},0).wait(1).to({x:-30.7,y:-3.5},0).wait(1).to({x:-26.3,y:-6.6},0).wait(1).to({x:-22,y:-9.8},0).wait(1).to({x:-17.6,y:-12.9},0).wait(1).to({x:-13.2,y:-16.1},0).wait(1).to({x:-8.8,y:-19.2},0).wait(1).to({x:-4.4,y:-22.4},0).wait(1).to({x:0,y:-25.5},0).wait(1).to({x:4.3,y:-28.7},0).wait(1).to({x:8.7,y:-31.8},0).wait(1).to({x:13.1,y:-35},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-357.9,-23.5,591.5,192);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;