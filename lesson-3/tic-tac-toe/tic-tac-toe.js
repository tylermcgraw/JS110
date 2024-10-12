/*
Questions:
Is it correct to use a constant function to create the horizontal gridlines and
array of valid moves? Or should they be regular function declarations?
I was not able to put some messages in my constant messages object because they
referenced local variables, such as board/score. Is there a way to handle this?
*/
let rlSync = require('readline-sync');

const MATCH_LIMIT = 5;
const PIECES = {
  player: 'X',
  computer: 'O',
  empty: ' '
};
const MESSAGES = {
  welcome: `Welcome to Tic Tac Toe!
You are ${PIECES.player}'s, I am ${PIECES.computer}'s.`,
  getBoardSize: 'What size board would you like? I can handle 3x3 up to 9x9 ',
  getFirstMove: "Who moves first? (player, computer, choose, or random) ",
  getStartingPiece: "Who goes first, me or you? (player or computer) ",
  getMove: `Where would you like to place your next ${PIECES.player}? `,
  computerMove: `My move! I think I'll go... Here!`,
  playerWin: "You Win!\n",
  computerWin: "Computer Wins!\n",
  tie: "It's a tie!\n",
  playAgain: "Do you want to play again? ",
  playerWinMatch: "Congratulations! You win the match!\n",
  computerWinMatch: "Sorry... the computer wins the match!\n",
};
const VALID_RESPONSE = {
  yes: ['Yes', 'yes', 'Y', 'y'],
  no: ['No', 'no', 'N', 'n'],
  board: [3, 4, 5, 6, 7, 8, 9],
  firstMove: {
    player: ['player', 'p', 'pl'],
    computer: ['computer', 'c', 'co', 'com'],
    choose: ['choose', 'ch'],
    random: ['random', 'r', 'rand']
  }
};

const HORIZONTAL_GRIDLINE = function (board) {
  let gridline = '';
  for (let idx = 0; idx < board.length; idx += 1) {
    for (let dashes = 0; dashes < 3; dashes += 1) {
      gridline += '-';
    }
    if (idx < board.length - 1) gridline += '|';
  }
  return gridline;
};

const VALID_MOVE = function (board) {
  let input = [];
  for (let idx = 1; idx <= board.length; idx += 1) {
    input.push(idx);
  }
  return input;
};

// Start the match
playMatch();

function playMatch() {
  displayWelcome();
  let anotherMatch = true;
  while (anotherMatch) {
    let boardSize = getBoardSize();
    let firstMove = getFirstMove();
    displayRules(boardSize);
    let score = newScore();
    let anotherGame = true;
    while (anotherGame) {
      anotherGame = playGame(score, boardSize, firstMove);
    }
    if (Object.values(score).includes(MATCH_LIMIT)) {
      anotherMatch = playAgain();
      console.clear();
    } else anotherMatch = false;
  }
}

function playGame(score, boardSize, firstMove) {
  let board = newBoard(boardSize);
  let currentPiece = getStartingPiece(firstMove);
  while (true) {
    displayBoard(board);
    makeMove(board, currentPiece);
    // Alternate the current piece
    currentPiece = currentPiece === PIECES.player
      ? PIECES.computer : PIECES.player;
    let winner = getWinner(board);
    if (winner !== PIECES.empty || fullBoard(board)) {
      displayBoard(board);
      displayWinner(winner, score);
      displayScore(score);
      // Prevents repetitive play again message
      if (Object.values(score).includes(MATCH_LIMIT)) return false;
      return playAgain();
    }
  }
}

function displayScore(score) {
  console.log(`The score is: Player: ${score.playerScore} to Computer: ${score.computerScore}\n`);
  if (score.playerScore === MATCH_LIMIT) {
    console.log(MESSAGES.playerWinMatch);
  } else if (score.computerScore === MATCH_LIMIT) {
    console.log(MESSAGES.computerWinMatch);
  }
}

function displayWinner(winner, score) {
  if (winner === PIECES.player) {
    console.log(MESSAGES.playerWin);
    score.playerScore += 1;
  } else if (winner === PIECES.computer) {
    console.log(MESSAGES.computerWin);
    score.computerScore += 1;
  } else {
    console.log(MESSAGES.tie);
  }
}

function displayBoard(board) {
  // Display piece padded by one space on each side, separate cols with '|'
  board.forEach((row, rowNum) => {
    if (rowNum === 0) console.log();
    console.log(
      row.reduce((acc, piece, colNum) => {
        acc += ' ' + piece + ' ';
        if (colNum < board.length - 1) acc += '|';
        return acc;
      }, ''));
    // Display horizontal gridline every other line, exluding the last line
    console.log(rowNum < board.length - 1
      ? HORIZONTAL_GRIDLINE(board) : '');
  });
}

function displayWelcome() {
  console.clear();
  console.log(MESSAGES.welcome);
}

function displayRules(boardSize) {
  console.log(`Get ${boardSize} ${PIECES.player}'s in a row to win!\n
To make a move, enter a row number (from 1 to ${boardSize}) followed by a column number (from 1 to ${boardSize}).`);
}

function updateBoard(board, piece, x, y) {
  board[x][y] = piece;
}

function newBoard(boardSize) {
  let board = [];
  for (let rows = 0; rows < boardSize; rows += 1) {
    let row = [];
    for (let cols = 0; cols < boardSize; cols += 1) {
      row.push(PIECES.empty);
    }
    board.push(row);
  }
  return board;
}

function newScore() {
  return {playerScore: 0, computerScore: 0};
}

function getBoardSize() {
  let boardSize;
  do {
    boardSize = parseInt(rlSync.question(MESSAGES.getBoardSize), 10);
  } while (!VALID_RESPONSE.board.includes(boardSize));
  return boardSize;
}

function getFirstMove() {
  let move;
  do {
    move = rlSync.question(MESSAGES.getFirstMove).toLowerCase();
  } while (!Object.values(VALID_RESPONSE.firstMove).flat().includes(move));
  return move;
}

function getStartingPiece(firstMove) {
  if (VALID_RESPONSE.firstMove.player.includes(firstMove)) {
    return PIECES.player;
  } else if (VALID_RESPONSE.firstMove.computer.includes(firstMove)) {
    return PIECES.computer;
  } else if (VALID_RESPONSE.firstMove.choose.includes(firstMove)) {
    return chooseMove();
  } else if (VALID_RESPONSE.firstMove.random.includes(firstMove)) {
    let move = Math.floor(Math.random() * 2);
    return move === 0 ? PIECES.player : PIECES.computer;
  }
  return PIECES.player;
}

function chooseMove() {
  let move;
  do {
    move = rlSync.question(MESSAGES.getStartingPiece).toLowerCase();
  } while (!(VALID_RESPONSE.firstMove.player.includes(move)
      || VALID_RESPONSE.firstMove.computer.includes(move)));
  return VALID_RESPONSE.firstMove.player.includes(move)
    ? PIECES.player : PIECES.computer;
}

function makeMove(board, piece) {
  if (piece === PIECES.player) {
    updateBoard(board, piece, ...getUserMove(board));
  } else {
    updateBoard(board, piece, ...getComputerMove(board));
  }
}

function getUserMove(board) {
  let move;
  do {
    move = rlSync.question(MESSAGES.getMove);
    move = move.split('')
      .filter(char => !Number.isNaN(parseInt(char, 10)))
      .map(char => parseInt(char, 10));
  } while (move.length < 2
    || !(VALID_MOVE(board).includes(move[0])
    && VALID_MOVE(board).includes(move[1]))
    || (board[move[0] - 1][move[1] - 1] !== PIECES.empty));
  return [move[0] - 1, move[1] - 1];
}

function getComputerMove(board) {
  let row;
  let col;
  do {
    row = Math.floor(Math.random() * board.length);
    col = Math.floor(Math.random() * board.length);
  } while (board[row][col] !== PIECES.empty);
  console.log(MESSAGES.computerMove + ` (${row + 1}, ${col + 1})\n`);
  return [row, col];
}

function getWinner(board) {
  let rightDiag = [];
  let leftDiag = [];
  for (let idx = 0; idx < board.length; idx += 1) {
    // Check rows (idx = row)
    if (isMatching(board[idx])) return board[idx][0];

    // Check cols (idx = col)
    let col = [];
    for (let row = 0; row < board.length; row += 1) {
      col.push(board[row][idx]);
      if (idx === row) rightDiag.push(board[row][idx]);
      if (idx + row === board.length - 1) leftDiag.push(board[row][idx]);
    }
    if (isMatching(col)) return col[0];
  }

  // Check diagonals
  if (isMatching(rightDiag)) return rightDiag[0];
  if (isMatching(leftDiag)) return leftDiag[0];

  return PIECES.empty;
}

function fullBoard(board) {
  return board.every(row => row.every(col => {
    return col !== PIECES.empty;
  }));
}

function isMatching(arr) {
  if (arr[0] === PIECES.empty) return false;
  for (let idx = 1; idx < arr.length; idx += 1) {
    if (arr[idx - 1] !== arr[idx]) return false;
  }
  return true;
}

function playAgain() {
  let response;
  do {
    response = rlSync.question(MESSAGES.playAgain);
  } while (![...VALID_RESPONSE.yes, ...VALID_RESPONSE.no].includes(response));
  return VALID_RESPONSE.yes.includes(response);
}