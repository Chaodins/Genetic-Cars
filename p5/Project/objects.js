class Wheel {
    constructor(x, y, r, img) {
        this.pos = {x: x, y: y};
        this.radius = r;
        this.texture = createSprite(x, y);
        this.texture.addImage(img);
    }
}

class Car {
    constructor(x, y, rad_wheel, img) {
        this.pos = {x: x, y: y};
        this.wheel = new Wheel(x - 100, y - 100, rad_wheel, img);
        this.wheel1 = new Wheel(x + 100, y - 100, rad_wheel, img);
    }
    getX() {
        return (this.pos.x);
    }
    getY() {
        return (this.pos.y);
    }
    // car_move() {
    //     if ()
    // }
}

class Floor {
    constructor(x, y, img) {
        this.floor = createSprite(x, y);
        this.floor.addImage(img);
        this.floor.immovable = true;
    }
}
