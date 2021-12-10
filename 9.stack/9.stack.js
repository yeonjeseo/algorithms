const inputs = require("fs").readFileSync("input.txt").toString().split("\n");

const [commandCnt, ...commands] = inputs;
const stack = [];
const result = [];
commands.forEach((command) => {
  const [com, arg] = command.split(" ");
  handleCommands(com, arg);
});

// 명령어 받아서 실행하는 함수
function handleCommands(command, arg) {
  arg = parseInt(arg) || 0;
  if (command === "push") {
    stack.push(arg);
  }
  if (command === "pop") {
    result.push(stack.length !== 0 ? stack.pop() : -1);
  }
  if (command === "size") {
    result.push(stack.length);
  }
  if (command === "empty") {
    result.push(stack.length === 0 ? 1 : 0);
  }
  if (command === "top") {
    result.push(stack.length !== 0 ? stack[stack.length - 1] : -1);
  }
}

console.log(result.join("\n"));
