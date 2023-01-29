const players = [
  {
    id: 1,
    name: 'Ivan',
    scorePoints: 4500,
  },
  {
    id: 2,
    name: 'Petr',
    scorePoints: 3600,
  },
  {
    id: 3,
    name: 'Vadim',
    scorePoints: 3433,
  },
  {
    id: 4,
    name: 'Olga',
    scorePoints: 2356,
  },
];

// 1 вариант

console.log(
  Math.max(
    players[0].scorePoints,
    players[1].scorePoints,
    players[2].scorePoints,
    players[3].scorePoints
  )
);

// 2 вариант

let points = [];
for (let player of players) {
  points.push(player.scorePoints);
}
console.log(Math.max(...points));
