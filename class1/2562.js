const testInput =
	process.platform === "linux"
		? null
		: `2
3 ABC
5 /HTP`;
const [n, ...arr] = (testInput || require("fs").readFileSync("/dev/stdin").toString()) // 백준 입력
	.trim()
	.split("\n");

for (let i = 0; i < n; i++) {
	let args = arr[i].split(" ");
	console.log(
		args[1]
			.split("")
			.map((str) => [...Array(Number(args[0]))].map((_) => str).join(""))
			.join("")
	);
}
