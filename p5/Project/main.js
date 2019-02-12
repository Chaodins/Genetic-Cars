var floor;
var cars[];
var floor_img;
var wheel_img;
var GRAVITY = 1;

function load() {
    floor_img = loadImage('assets/floor.png');
    wheel_img = loadImage('assets/circle.png');
}

function setup() {
    createCanvas(1200, 800);
    load();
    floor = createSprite(300 + 600, 700);
    floor.addImage(floor_img);
    floor.immovable = true;
    floor = createSprite(300, 700);
    floor.addImage(floor_img);
    floor.immovable = true;
    var car = new Car(200, 200, createSprite(x - 100, y - 100), createSprite(x + 100, y - 100)
}

function draw() {
    background(220);
    wheel.bounce(floor)
    if (floor.overlapPixel(wheel.position.x, wheel.position.y + 50) == false) {
        wheel.velocity.y += GRAVITY;
        if (wheel.velocity.x > 0)
            wheel.velocity.x -= 1;
    }
    while (floor.overlapPixel(wheel.position.x, wheel.position.y + 50)) {
        wheel.position.y--;
        wheel.velocity.y = 0;
        wheel.velocity.x += 1;
        if (wheel.velocity.x > 20)
            wheel.velocity.x -=1;
    }
    drawSprites();
}
