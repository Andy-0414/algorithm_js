const input =
	process.platform === "linux" // 백준 채점환경일 시
		? require("fs").readFileSync("/dev/stdin").toString().trim() // 백준 입력
		: `1 1`; // 아니면 테스트 입력
const args = input.split(" ").map((i) => Number(i));

const gap = args[0] - args[1];

if (gap > 0) {
	console.log(">");
} else if (gap < 0) {
	console.log("<");
} else {
	console.log("==");
}
