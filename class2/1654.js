const testInput =
	process.platform === "linux"
		? null
		: `4 11
802
743
457
539`;
const [size, ...arr] = (testInput || require("fs").readFileSync("/dev/stdin").toString()).split("\n");

// const currentCount = Number(size.split(" ")[0]);
const goalCount = Number(size.split(" ")[1]);

const cableList = arr.map((i) => Number(i)).sort((a, b) => b - a);

function binarySearch(list, target) {
	let left = 1;
	let right = list[0];

	function check(mid, target) {
		return list.reduce((p, n) => p + ~~(n / mid), 0) >= target;
	}

	let result = 0;

	while (left <= right) {
		let mid = ~~((left + right) / 2);

		if (check(mid, target)) {
			if (result < mid) result = mid;
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return result;
}

console.log(binarySearch(cableList, goalCount));
