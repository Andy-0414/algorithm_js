const testInput =
	process.platform === "linux"
		? null
		: `8
4
3
6
8
7
5
2
1`;
let [size, ...arr] = (testInput || require("fs").readFileSync("/dev/stdin").toString()).split("\n");
arr = arr.map((i) => Number(i));

let result = [];

let top = 1;
let stack = [];

for (i = 0; i < size; i++) {
	let target = Number(arr[i]);

	if (top <= target) {
		while (top <= target) {
			stack.push(top);
			result.push("+");

			if (top == target) {
				stack.pop();
				result.push("-");
			}

			top++;
		}
	} else {
		if (stack[stack.length - 1] != target) {
			result = [];
			break;
		} else {
			stack.pop();
			result.push("-");
		}
	}
}

if (result.length) console.log(result.join("\n"));
else console.log("NO");
