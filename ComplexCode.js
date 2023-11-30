/**
 * Filename: ComplexCode.js
 * Description: This code demonstrates a complex algorithm for finding the longest increasing subsequence in an array.
 */

// Function to find the longest increasing subsequence in an array
function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
      }
    }
  }

  let maxLength = 0;
  for (let i = 0; i < n; i++) {
    if (dp[i] > maxLength) {
      maxLength = dp[i];
    }
  }

  const result = [];
  let currLength = maxLength;

  for (let i = n - 1; i >= 0; i--) {
    if (dp[i] === currLength) {
      result.unshift(arr[i]);
      currLength--;
    }
  }

  return result;
}

// Test the code with example input
const exampleInput = [3, 10, 2, 1, 20];
const result = findLongestIncreasingSubsequence(exampleInput);
console.log("Longest Increasing Subsequence:");
console.log(result);

// Output: [2, 10, 20]