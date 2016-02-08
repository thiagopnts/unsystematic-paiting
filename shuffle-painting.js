var imageURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Gustav_Klimt_046.jpg/1280px-Gustav_Klimt_046.jpg";
var img;
var blockSizeX;
var blockSizeY;
var output;
function preload(){
	img = loadImage(imageURL);	
}

function setup(){
	createCanvas(1280, 1000);
	img.loadPixels();
	blockSizeX = img.width/5;
	blockSizeY = img.height/5;
	var areas = [];
	var images = [];
	for(var x = 0; x<img.width; x+=blockSizeX){
		for(var y = 0; y<img.height; y+=blockSizeY){
			images.push(img.get(x, y, blockSizeX, blockSizeY));
			areas.push({x:x, y:y});
		}
	}	
	shuffle(areas, true);

	for(var i = 0 ; i<images.length; i++){
		image(images[i], areas[i].x, areas[i].y);
	}
}
