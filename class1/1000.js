const input =
	process.platform === "linux" // 백준 채점환경일 시
		? require("fs").readFileSync("/dev/stdin").toString().trim() // 백준 입력
		: `1 2`; // 아니면 테스트 입력
const args = input.split(" ").map((i) => Number(i));

console.log(args.reduce((a, b) => a + b));
