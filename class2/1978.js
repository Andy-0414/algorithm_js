const testInput =
	process.platform === "linux"
		? null
		: `4
1 3 5 7`;
let [n, data] = (testInput || require("fs").readFileSync("/dev/stdin").toString()).trim().split("\n");
data = data.split(" ");
let arr = [false, false];

for (let i = 2; i <= 1000; i++) {
	arr[i] = true;
}
for (let i = 2; i * i <= 1000; i++) {
	if (arr[i]) for (let j = i * i; j <= 1000; j += i) arr[j] = false;
}
console.log(data.map((i) => arr[i]).reduce((sum, chk) => sum + (chk ? 1 : 0), 0));
