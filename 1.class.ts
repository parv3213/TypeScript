class Point {
	constructor(private x?: number, private y?: number) {}
	draw() {
		console.log(`X :${this.x} and Y :${this.y}`);
	}
	getX() {
		return this.x;
	}
	setX(value) {
		if (value < 0) throw new Error("Value cannot be less than 0");
		this.x = value;
	}
}

const point = new Point(2, 5);
point.draw();
point.setX(10);
console.log(point.getX());
