const testInput =
	process.platform === "linux"
		? null
		: `10 13
BBBBBBBBWBWBW
BBBBBBBBBWBWB
BBBBBBBBWBWBW
BBBBBBBBBWBWB
BBBBBBBBWBWBW
BBBBBBBBBWBWB
BBBBBBBBWBWBW
BBBBBBBBBWBWB
WWWWWWWWWWBWB
WWWWWWWWWWBWB`;
const [size, ...args] = (testInput || require("fs").readFileSync("/dev/stdin").toString()).trim().split("\n");

const sizeX = Number(size.split(" ")[1]);
const sizeY = Number(size.split(" ")[0]);

let matrix = args.map((row) => row.split(""));

function getPaintColorCount(offsetX, offsetY, m) {
	let oddTotal = 0;
	let evenTotal = 0;

	m.forEach((row, y) => {
		row.forEach((i, x) => {
			let positionX = x + offsetX;
			let positionY = y + offsetY;

			if (positionX % 2 == positionY % 2) {
				if (i == "W") oddTotal++;
				else evenTotal++;
			} else {
				if (i == "W") evenTotal++;
				else oddTotal++;
			}
		});
	});
	return Math.min(oddTotal, evenTotal);
}

let min = null;
for (let y = 0; y <= sizeY - 8; y++) {
	for (let x = 0; x <= sizeX - 8; x++) {
		let m = matrix.slice(y, y + 8).map((row) => row.slice(x, x + 8));

		result = getPaintColorCount(x, y, m);

		if (min === null || result < min) min = result;
	}
}
console.log(min);
