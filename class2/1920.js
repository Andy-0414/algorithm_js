const testInput =
	process.platform === "linux"
		? null
		: `5
4 1 5 2 3
5
1 3 7 9 5`;
let [n, arr, m, arr2] = (testInput || require("fs").readFileSync("/dev/stdin").toString()).split("\n");

let keyValueStore = {};
arr = arr.split(" ").forEach((i) => (keyValueStore[i] = 1));
arr2.split(" ").forEach((i) => console.log(keyValueStore[Number(i)] || 0));
