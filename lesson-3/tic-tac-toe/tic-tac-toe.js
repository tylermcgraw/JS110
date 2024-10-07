let rlSync = require('readline-sync');

const MATCH_LIMIT = 5;
const PIECES = {
  player: 'X',
  computer: 'O',
  empty: ' '
};
const MESSAGES = {
  welcome: `\nWelcome to Tic Tac Toe!
You are ${PIECES.player}'s, I am ${PIECES.computer}'s.`,
  getBoardSize: 'What size board would you like?\nI can handle nxn, where 2 < n < 10. Enter 3, 4, 9, etc: ',
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
  board: ['3', '4', '5', '6', '7', '8', '9'],
  firstMove: {
    player: 'player',
    computer: 'computer',
    choose: 'choose',
    random: 'random'
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
    input.push(String(idx));
  }
  return input;
};

// Start the match
playMatch();

function playMatch() {
  displayWelcome();
  let boardSize = getBoardSize();
  let firstMove = getFirstMove();
  displayRules(boardSize);
  let anotherMatch = true;
  while (anotherMatch) {
    let score = newScore();
    let anotherGame = true;
    while (anotherGame) {
      anotherGame = playGame(score, boardSize, firstMove);
    }
    if (Object.values(score).includes(MATCH_LIMIT)) anotherMatch = playAgain();
    else anotherMatch = false;
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
  console.log(MESSAGES.welcome);
}

function getBoardSize() {
  let boardSize;
  do {
    boardSize = rlSync.question(MESSAGES.getBoardSize);
  } while (!VALID_RESPONSE.board.includes(boardSize));
  return Number(boardSize);
}

function getFirstMove() {
  let move;
  do {
    move = rlSync.question(MESSAGES.getFirstMove);
  } while (!Object.values(VALID_RESPONSE.firstMove).includes(move));
  return move;
}

function displayRules(boardSize) {
  console.log(`Get ${boardSize} ${PIECES.player}'s in a row to win!\n
To make a move, enter a row number (1 - ${boardSize}) followed by a column number (1 - ${boardSize}).
Ex. 22 places a piece in row 2, column 2.`);
}

function newScore() {
  return {playerScore: 0, computerScore: 0};
}

function updateBoard(board, piece, x, y) {
  board[x][y] = piece;
}

function getStartingPiece(firstMove) {
  if (firstMove === VALID_RESPONSE.firstMove.player) return PIECES.player;
  if (firstMove === VALID_RESPONSE.firstMove.computer) return PIECES.computer;
  if (firstMove === VALID_RESPONSE.firstMove.choose) {
    let move;
    do {
      move = rlSync.question(MESSAGES.getStartingPiece);
    } while (!(VALID_RESPONSE.firstMove.player === move
        || VALID_RESPONSE.firstMove.computer === move));
    return move === VALID_RESPONSE.firstMove.player
      ? PIECES.player : PIECES.computer;
  }
  if (firstMove === VALID_RESPONSE.firstMove.random) {
    let move = Math.floor(Math.random() * 2);
    return move === 0 ? PIECES.player : PIECES.computer;
  }
  return PIECES.player;
}


// Input must be a row followed by a colum, eg. 23
function getUserMove(board) {
  let move;
  do {
    move = rlSync.question(MESSAGES.getMove);
  } while (!(VALID_MOVE(board).includes(move[0]) &&
    VALID_MOVE(board).includes(move[1]))
    || (board[Number(move[0]) - 1][Number(move[1]) - 1] !== PIECES.empty));
  return [Number(move[0]) - 1, Number(move[1]) - 1];
}

// Select a random, empty square
function getComputerMove(board) {
  let row;
  let col;
  do {
    row = Math.floor(Math.random() * board.length);
    col = Math.floor(Math.random() * board.length);
  } while (board[row][col] !== PIECES.empty);
  console.log(MESSAGES.computerMove + ` (${row}, ${col})\n`);
  return [row, col];
}

function makeMove(board, piece) {
  if (piece === PIECES.player) {
    updateBoard(board, piece, ...getUserMove(board));
  } else {
    updateBoard(board, piece, ...getComputerMove(board));
  }
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
      else if (idx + row === board.length - 1) leftDiag.push(board[row][idx]);
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