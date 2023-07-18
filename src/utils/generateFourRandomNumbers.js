/**
 * Generates four random numbers between 1 and 1,000,000,000
 * @returns {number[]}
 */
export const generateRandomNumbers = () => {
  const numbers = new Set();

  while (numbers.size < 4) {
    const randomNum = Math.floor(Math.random() * 1_000_000_000) + 1;
    numbers.add(randomNum);
  }

  return Array.from(numbers);
};
