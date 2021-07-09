const testInput = process.platform === "linux" ? null : `1 2 3 4 5 7 6 5`;
const input = testInput || require("fs").readFileSync("/dev/stdin").toString();
const args = input.split(" ").map((i) => Number(i));

let gap = args[0] - args[1];
let status = gap == 1 ? "descending" : gap == -1 ? "ascending" : "mixed";

for (let i of args) {
	if (status == "descending" && args[i + 1] !== undefined && args[i] - args[i + 1] != 1) {
		status = "mixed";
		break;
	}
	if (status == "ascending" && args[i + 1] !== undefined && args[i] - args[i + 1] != -1) {
		status = "mixed";
		break;
	}
}
console.log(status);
