import { readFile } from "../utils/files.ts";

export async function solve1() {
  const input = await readFile("./1/input.txt");
  const lines = input.split("\r\n");
  const arrays = lines.map((line) => line.split("   "));

  const leftArray = arrays.map((line) => Number(line[0])).sort();
  const rightArray = arrays.map((line) => Number(line[1])).sort();

  let result = 0;
  let similarity = 0;
  const similarityArray = [];
  leftArray.map((num) => {
    rightArray.map((rightNum) => {
      if (num === rightNum) {
        similarity++;
      }
    });
  });

  for (let i = 0; i < leftArray.length; i++) {
    const numberToCheck = leftArray[i];
    let count = 0;
    for (let j = 0; j < rightArray.length; j++) {
      if (numberToCheck === rightArray[j]) {
        count++;
      }
    }

    similarityArray.push(count * numberToCheck);
  }

  const distanceArray = leftArray.map((num, index) =>
    Math.abs(num - rightArray[index])
  );

  similarity = similarityArray.reduce((acc, curr) => acc + curr, 0);

  const distance = distanceArray.reduce((acc, curr) => acc + curr, 0);
  result = result + distance;

  // Part 1
  console.log("Answer", result);

  // Part 2
  console.log("Similarity", similarity);
}
