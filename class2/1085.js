const testInput = process.platform === "linux" ? null : `6 2 10 3`;
const [x, y, w, h] = (testInput || require("fs").readFileSync("/dev/stdin").toString())
	.trim()
	.split(" ")
	.map((i) => Number(i));

// 0,0 w,h
console.log(Math.min(x, y, Math.abs(x - w), Math.abs(y - h)));
