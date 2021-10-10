// description: https://www.hackerrank.com/challenges/apple-and-orange/problem

/**
 * apples to oranges challenge
 *
 * @param {number} s
 * @param {number} t
 * @param {number} a
 * @param {number} b
 * @param {number[]} apples
 * @param {number[]} oranges
 * @returns null
 * print on the console the no of apples or oranges that falls on sams house
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here

  // Sort descending
  const appleHL = apples.sort((a, b) => b - a);
  // interested in only positve apple distances
  let appleCount = 0;
  for (let i = 0; i < appleHL.length; i++) {
    let distance = a + appleHL[i];
    if (appleHL[i] < 0) break;
    if (distance > t) continue;
    if (distance < s) break;
    appleCount++;
  }

  // Sort ascending
  const orangeLH = oranges.sort((a, b) => a - b);
  // interested in only negative orange distances
  let orangeCount = 0;
  for (let i = 0; i < orangeLH.length; i++) {
    if (orangeLH[i] > 0) break;
    let ds = b + orangeLH[i];
    if (ds > t) break;
    if (ds < s) continue;
    orangeCount++;
  }
  console.log(appleCount);
  console.log(orangeCount);
}
