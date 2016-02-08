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
	for (var x = 0; x < img.width; x+=blockSizeX) {
	    for(var y = 0; y < img.height; y+=blockSizeX) {
	        for(var j = 0; j < 8; j++) {
                var idx = 4 * (x * d) * (y * d) + j;
                img.pixels[idx] = red(color(random(255)));
                img.pixels[idx + 1] = blue(color(random(255)));
                img.pixels[idx + 2] = green(color(random(255)));
                img.pixels[idx + 3] = alpha(color(random(255)));
            }
        }
    }

    img.updatePixels();
    image(img, 0, 0)
}
