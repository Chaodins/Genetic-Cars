var floor;

function setup() {
    createCanvas(1200, 800);
    var img = loadImage('assets/floor.png');
    imageSprite = createSprite(300, 700);
    imageSprite.addImage(img);
    imageSprite = createSprite(300 + 600, 700);
    imageSprite.addImage(img);
}

function draw() {
    background(220);
    drawSprites();
}
