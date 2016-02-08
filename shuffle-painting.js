var imageURL = "./image.png";
var img;
var blockSizeX;
var blockSizeY;
var output;
var d;

function preload(){
	img = loadImage(imageURL);
    d = pixelDensity();
}

function setup(){
	createCanvas(1280, 1000);
	img.loadPixels();
	blockSizeX = img.width/5;
	blockSizeY = img.height/5;
	var areas = [];
	var images = [];
    for (var i = 0; i < img.pixels.length ; i+=4) {
        var r = Math.floor(Math.random() * img.pixels.length) % (i + 1);
        var old = img.pixels[i];
        img.pixels[i] = img.pixels[r];
        img.pixels[r] = old;
    }

    img.updatePixels();
    image(img, 0, 0)
}
