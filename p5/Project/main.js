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
    input_setup();
    input_setup2();
}

function draw() {
    background(220);
    camera.position.x = car.getX();
    for (var i = 0; i < 2; i++) {
        car.wheel.texture.bounce(floors[i].floor);
        if (floors[i].floor.overlapPixel(car.wheel.pos.x, car.wheel.pos.y + 50) == false) {
            car.wheel.texture.velocity.y += GRAVITY;
            if (car.wheel.texture.velocity.x > 0)
                car.wheel.texture.velocity.x -= 1;
        }
        while (floors[i].floor.overlapPixel(car.wheel.pos.x, car.wheel.pos.y + 50)) {
            car.wheel.position.y--;
            car.wheel.texture.velocity.y = 0;
            car.wheel.texture.velocity.x += 1;
            if (car.wheel.texture.velocity.x > 20)
                car.wheel.texture.velocity.x -= 1;
        }
    }
    for (var i = 0; i < 2; i++) {
        car.wheel1.texture.bounce(floors[i].floor);
        if (floors[i].floor.overlapPixel(car.wheel1.pos.x, car.wheel1.pos.y + 50) == false) {
            car.wheel1.texture.velocity.y += GRAVITY;
            if (car.wheel1.texture.velocity.x > 0)
                car.wheel1.texture.velocity.x -= 1;
        }
        while (floors[i].floor.overlapPixel(car.wheel1.pos.x, car.wheel1.pos.y + 50)) {
            car.wheel1.position.y--;
            car.wheel1.texture.velocity.y = 0;
            car.wheel1.texture.velocity.x += 1;
            if (car.wheel1.texture.velocity.x > 20)
                car.wheel1.texture.velocity.x -= 1;
        }
    }
    drawSprites();
}
