import { readFile } from "../utils/files.ts";

export async function solve2() {
  const input = await readFile("./2/input.txt");
  const splitted = input.split("\r\n");
  const reports = splitted.map((line) =>
    line.split(" ").map((word) => Number(word))
  );

  //  console.log(reports);

  let invalidArrayCount = 0;
  let validArrayCount = 0;
  for (const report of reports) {
    // Setup values to check
    let sum = 0;
    const upperBound = 3 * report.length;
    const sumArray = [];

    // Calculate the sum, and the sum array for each in the report
    for (let i = 0; i < report.length; i++) {
      if (report[i] === undefined || report[i + 1] === undefined) {
        break;
      }
      //    console.log("Comparing ", report[i], " and ", report[i + 1]);
      sum += distance(report[i], report[i + 1]);
      sumArray.push(report[i] - report[i + 1]);
    }

    const sumOfSumArray = sumArray.reduce((acc, curr) => acc + curr, 0);
    // console.log(sumArray);
    // console.log("Sum is", sum);
    // console.log("Sum of sum array is", Math.abs(sumOfSumArray));
    // console.log("Upper bound is", upperBound);
    // console.log("Lower bound is", lowerBound);

    if (
      sum > upperBound ||
      Math.abs(sumOfSumArray) != sum ||
      sumArray.includes(0)
    ) {
      //   console.log("*** Invalid *** ");
      //   console.log(report);
      //   if (sum > upperBound) {
      //     console.log("Due to sum is greater than upperbound ");
      //   }
      //   if (Math.abs(sumOfSumArray) != sum) {
      //     console.log("Due to difference in sum ");
      //   }
      //   if (sumArray.includes(0)) {
      //     console.log("Due to includes 0 ");
      //   }
      invalidArrayCount++;
    }
    if (
      sum <= upperBound &&
      Math.abs(sumOfSumArray) == sum &&
      !sumArray.includes(0)
    ) {
      validArrayCount++;
    }
  }

  function distance(a: number, b: number) {
    return Math.abs(a - b);
  }
  console.log("Valid array count is", validArrayCount);
  console.log("Invalid  array count is", invalidArrayCount);
}
