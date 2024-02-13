function isWinner(player1: number[], player2: number[]): number {
  let sum1 = 0; // 40
  let sum2 = 0; // 
  let pin1 = false;
  let pin2 = false;

  for ( let i = 0; i < player1.length;i++) {
    const curr1 = player1[i]
    const curr2 = player2[i]


    sum1 += curr1 * ( ( player1[i - 1] === 10 || player1[i - 2] === 10) ? 2 : 1)
    sum2 += curr2 * ( ( player2[i - 1] === 10 || player2[i - 2] === 10) ? 2 : 1)
  }

  console.log(sum1, sum2)
  if ( sum1 === sum2) return 0
  return sum1 > sum2 ? 1 : 2
};