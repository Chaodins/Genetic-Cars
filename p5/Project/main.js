var floors = [];
var floor_img;
var wheel_img;
var GRAVITY = 1;
var car;

function load() {
    floor_img = loadImage('assets/floor.png');
    wheel_img = loadImage('assets/circle.png');
}

function setup() {
    createCanvas(1200, 800);
    load();

    // car create
    car = new Car(200, 200, 10, wheel_img);

    // floor create
    floors[0] = new Floor(300 + 600, 700, floor_img);
    floors[1] = new Floor(300, 700, floor_img);
}

function draw() {
    background(220);
    // for (var i = 0; i < 2; i++) {
    //     car.wheel.bounce(floors[i]);
    //     if (floors[i].overlapPixel(car.wheel.position.x, car.wheel.position.y + 50) == false) {
    //         car.wheel.velocity.y += GRAVITY;
    //         if (car.wheel.velocity.x > 0)
    //             car.wheel.velocity.x -= 1;
    //     }
    //     while (floors[i].overlapPixel(car.wheel.position.x, car.wheel.position.y + 50)) {
    //         car.wheel.position.y--;
    //         car.wheel.velocity.y = 0;
    //         car.wheel.velocity.x += 1;
    //         if (car.wheel.velocity.x > 20)
    //             car.wheel.velocity.x -= 1;
    //     }
    // }
    drawSprites();
}
