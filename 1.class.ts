class Point {
	x: number;
	y: number;
	constructor(x?: number, y?: number) {
		this.x = x;
		this.y = y;
	}
	draw() {
		console.log(`X :${this.x} and Y :${this.y}`);
	}
}

const point1 = new Point();
point1.draw();
const point = new Point(2, 5);
point.draw();
