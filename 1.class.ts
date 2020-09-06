class Point {
	constructor(private x?: number, private y?: number) {}
	draw() {
		console.log(`X :${this.x} and Y :${this.y}`);
	}
	getX() {
		return this.x;
	}
}

const point = new Point(2, 5);
point.draw();
console.log(point.getX());
