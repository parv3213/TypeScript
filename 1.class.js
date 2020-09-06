"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var point = new point_1.Point(2, 5);
point.x = 10;
console.log(point.x);
point.draw();
