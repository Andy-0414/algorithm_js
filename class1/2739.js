const testInput = process.platform === "linux" ? null : `2`;
const input = testInput || require("fs").readFileSync("/dev/stdin").toString();

for (let j = 1; j <= 9; j++) {
	console.log(`${input} * ${j} = ${input * j}`);
}
