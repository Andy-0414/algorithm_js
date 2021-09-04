const testInput =
	process.platform === "linux"
		? null
		: `3
1 0
5
4 2
1 2 3 4
6 0
1 1 9 1 1 1`;
let [n, ...arr] = (testInput || require("fs").readFileSync("/dev/stdin").toString()).trim().split("\n");

for (let i = 0; i < arr.length; i += 2) {
	let [_, target] = arr[i].split(" ").map((i) => Number(i));
	target = Number(target);
	let queue = arr[i + 1].split(" ").map((i) => Number(i));

	let count = 0;
	while (queue.length) {
		let max = Math.max(...queue);

		while (queue[0] < max) {
			queue.push(queue.shift());
			if (target <= 0) target = queue.length - 1;
			else target--;
		}
		queue.shift();
		count++;

		if (target == 0) {
			console.log(count);
			break;
		} else target--;
	}
}
