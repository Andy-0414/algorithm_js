const testInput = process.platform === "linux" ? null : `13`;
let input = Number((testInput || require("fs").readFileSync("/dev/stdin").toString()).trim());

let i = 1;
let range = 1;

while (range < input) {
	range += i++ * 6;
}
console.log(i);
