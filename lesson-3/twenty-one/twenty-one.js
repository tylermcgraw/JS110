let rlSync = require('readline-sync');

const MESSAGES = {
  welcome: "Welcome to Twenty-One! Get as close to 21 as possible without going over (busting).\n",
  playerMove: "Do you want to hit or stay? ",
  playerBusted: "Busted! The dealer wins this one.\n",
  dealerBusted: "The dealer busted! You're the big winner.\n",
  playerWins: "You have the better hand, congratulations!\n",
  dealerWins: "The dealer has the better hand, sorry.\n",
};
const SUITS = ["Hearts", "Diamonds", "Clubs", "Spades"];
const VALUES = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  Jack: 10,
  Queen: 10,
  King: 10,
  Ace: 11
};
const MOVES = {
  hit: ["hit", 'h'],
  stay: ["stay", 's']
};
const STARTING_HAND_SIZE = 2;
const GOAL_TOTAL = 21;
const DEALER_MIN = 17;

playGame();

function playGame() {
  console.clear();
  console.log(MESSAGES.welcome);
  let hands = getStartingHands();
  displayDealerStartingHand(hands.dealer);
  displayPlayerHand(hands.player);
  playerTurn(hands);
  if (busted(hands.player)) {
    console.log(MESSAGES.playerBusted);
  } else {
    dealerTurn(hands);
    if (busted(hands.dealer)) {
      console.log(MESSAGES.dealerBusted);
    } else if (playerWins(hands)) {
      console.log(MESSAGES.playerWins);
    } else {
      console.log(MESSAGES.dealerWins);
    }
  }
}

function getStartingHands() {
  let hands = {
    player: [],
    dealer: []
  };
  for (let idx = 0; idx < STARTING_HAND_SIZE; idx += 1) {
    hit(hands.player, hands);
    hit(hands.dealer, hands);
  }
  return hands;
}

function hit(handToHit, hands) {
  let card;
  do {
    card = getRandomCard();
  } while (isDuplicate(hands, card));
  handToHit.push(card);
}

function getRandomCard() {
  let value = Object.keys(VALUES)[
    Math.floor(Math.random() * Object.keys(VALUES).length)
  ];
  let suit = SUITS[Math.floor(Math.random() * SUITS.length)];
  return [value, suit];
}

function isDuplicate(hands, card) {
  for (let hand in hands) {
    for (let idx = 0; idx < hands[hand].length; idx += 1) {
      if (hands[hand][idx][0] === card[0] && hands[hand][idx][1] === card[1]) {
        return true;
      }
    }
  }
  return false;
}

function displayDealerStartingHand(hand) {
  console.log(`Dealer has: ${hand[0][0]} and an unknown card`);
}

function displayPlayerHand(hand) {
  let message = `You have: ${handToString(hand)}`;
  console.log(message.slice(0, -5));
}

function displayDealerHand(hand) {
  let message = `Dealer has: ${handToString(hand)}`;
  console.log(message.slice(0, -5));
}

function handToString(hand) {
  let cards = '';
  for (let card of hand) {
    cards += card[0] + " and ";
  }
  return cards;
}

function playerTurn(hands) {
  while (true) {
    let move;
    do {
      move = rlSync.question(MESSAGES.playerMove);
    } while (!MOVES.hit.concat(MOVES.stay).includes(move.toLowerCase()));
    if (MOVES.hit.includes(move)) {
      hit(hands.player, hands);
      displayPlayerHand(hands.player);
    } else if (MOVES.stay.includes(move)) {
      break;
    }
    if (busted(hands.player)) {
      break;
    }
  }
}

function busted(hand) {
  return getTotal(hand) > GOAL_TOTAL;
}

function getTotal(hand) {
  let numAces = 0;
  let total = 0;
  for (let card of hand) {
    total += VALUES[card[0]];
    if (card[0] === 'Ace') numAces += 1;
  }
  for (let count = 0; count < numAces; count += 1) {
    if (total > GOAL_TOTAL) total -= 10;
  }
  return total;
}

function dealerTurn(hands) {
  let total = getTotal(hands.dealer);
  while (total < DEALER_MIN && !(total > GOAL_TOTAL)) {
    hit(hands.dealer, hands);
    total = getTotal(hands.dealer);
  }
  displayDealerHand(hands.dealer);
}

function playerWins(hands) {
  return getTotal(hands.player) > getTotal(hands.dealer);
}