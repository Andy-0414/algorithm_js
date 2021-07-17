const testInput =
	process.platform === "linux"
		? null
		: `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`;
const [count, ...arr] = (testInput || require("fs").readFileSync("/dev/stdin").toString()).trim().split("\n");

console.log(
	Array.from(new Set(arr))
		.sort()
		.sort((a, b) => a.length - b.length)
		.join("\n")
);
