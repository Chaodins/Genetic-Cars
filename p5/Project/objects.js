class Wheel {
    constructor(x, y, r) {
        this.body = createSprite(x, y);
        this.pos{x, y};
        this.radius = r;
    }
    setImage(image) {
        this.body = addImage(image);
    }
}

class Car {
    constructor(x, y, rad_wheel) {
        this.wheel = new Wheel(x - 100, y - 100, rad_wheel);
        this.wheel1 = new Wheel(x + 100, y - 100, rad_wheel);
    }
}
