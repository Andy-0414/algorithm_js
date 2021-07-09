const input =
	process.platform === "linux" // 백준 채점환경일 시
		? require("fs").readFileSync("/dev/stdin").toString().trim() // 백준 입력
		: `5`; // 아니면 테스트 입력

for (let i = 1; i <= input; i++) {
	console.log([...Array(i)].map((_) => "*").join(""));
}
