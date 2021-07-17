const testInput =
	process.platform === "linux"
		? null
		: `121
1231
12421
0`;
const input = testInput || require("fs").readFileSync("/dev/stdin").toString();

const args = input.split("\n");

function checkPalindrome(str) {
	let loop = (str.length - (str.length % 2)) / 2;
	let isPalindrome = true;
	for (let i = 0; i < loop; i++) {
		if (str[i] != str[str.length - 1 - i]) {
			isPalindrome = false;
			break;
		}
	}
	return isPalindrome;
}

let i = 0;
while (args[i] != "0") {
	console.log(checkPalindrome(args[i]) ? "yes" : "no");
	i++;
}
