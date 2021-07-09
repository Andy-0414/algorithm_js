const testInput = process.platform === "linux" ? null : ``;
const input = testInput || require("fs").readFileSync("/dev/stdin").toString();

const args = input.split(" ");

console.log(args);
