const testInput = process.platform === "linux" ? null : `999900 1000000`;
let [n, m] = (testInput || require("fs").readFileSync("/dev/stdin").toString()).split(" ");

n = Number(n);
m = Number(m);
let arr = {};

for (let i = Math.max(n, 2); i <= m; i++) {
	arr[i] = true;
}
for (let i = 2; i * i <= m; i++) {
	for (let j = i * i; j <= m; j += i) arr[j] = false;
}
Object.keys(arr).forEach((key) => arr[key] && console.log(key));
