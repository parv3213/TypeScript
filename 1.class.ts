class Point {
	x: number;
	y: number;
	draw() {
		console.log(`X :${this.x} and Y :${this.y}`);
	}
}

const point = new Point();
point.x = 2;
point.y = 5;
point.draw();
