class Point {
	constructor(private _x?: number, private _y?: number) {}
	draw() {
		console.log(`X :${this._x} and Y :${this._y}`);
	}
	get x() {
		return this._x;
	}
	set x(value) {
		if (value < 0) throw new Error("Value cannot be less than 0");
		this._x = value;
	}
}

const point = new Point(2, 5);
point.x = 10;
console.log(point.x);
point.draw();
