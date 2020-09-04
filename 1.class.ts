class Point {
	constructor(private x?: number, private y?: number) {}
	draw() {
		console.log(`X :${this.x} and Y :${this.y}`);
	}
}

const point1 = new Point();
point1.draw();
const point = new Point(2, 5);
point.draw();
