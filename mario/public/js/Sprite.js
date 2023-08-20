import Coordinate from './Vector.js';

export default class Sprite {
    constructor(canvas) {
        this.canvas = canvas
        this.pos = new Coordinate(0, 0);
        this.vel = new Coordinate(0, 0);
    }

    draw(context) {
        context.drawImage(this.canvas, this.pos.x, this.pos.y)
    }
}