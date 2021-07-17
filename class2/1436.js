const testInput = process.platform === "linux" ? null : "2";
const input = Number(testInput || require("fs").readFileSync("/dev/stdin").toString());

let n = 0;
let i = 0;
for (i = 666; n < input; i++) {
	if (String(i).indexOf("666") != -1) n++;
	if (n == input) break;
}

console.log(i);
