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

let stack = [];
let output = [];
let cursor = 0;

for (let num = 1; num <= Number(size); num++) {
	stack.push(num);
	output.push("+");
	if (num == Number(arr[cursor]))
		while (stack[stack.length - 1] == arr[cursor] && arr[cursor]) {
			cursor++;
			stack.pop();
			output.push("-");
		}
}

if (cursor == size) output.forEach((i) => console.log(i));
else console.log("NO");
