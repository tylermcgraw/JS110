const STACK = [];
let register = 0;

const COMMANDS = {
  PUSH: () => STACK.push(register),
  POP: () => {
    register = STACK.pop(register);
  },
  PRINT: () => console.log(register),
  ADD: () => {
    register += STACK.pop();
  },
  SUB: () => {
    register -= STACK.pop();
  },
  MULT: () => {
    register *= STACK.pop();
  },
  DIV: () => {
    register = Number.parseInt(register / STACK.pop(), 10);
  },
  REMAINDER: () => {
    register %= STACK.pop();
  },
};

function minilang(program) {
  program.split(' ').forEach(command => {
    if (Number.isNaN(Number(command))) COMMANDS[command]();
    else register = Number(command);
  });
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)