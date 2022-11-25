
// Find the century of a given year //

function solution(year) {
  var divided = year / 100;
  if (divided < 1) {
    return 1;
  } else if (divided === 1) {
    return 1;
  } else if (Number.isInteger(divided) && divided > 1) {
    return divided;
  } else if (!Number.isInteger(divided) && divided > 1) {
    return Math.floor(divided) + 1;
  }
}

solution(1905);

// Determine if the input string is a palindrome //

function isPalindrome(inputString) {
  var newString = '';
  var convertedArray = inputString.split('');
  var reversed = convertedArray.reverse();
  var toString = reversed.toString();
  for (var i = 0; i < toString.length; i++) {
    if (toString[i] !== ',') {
      newString += toString[i];
    }
  }
  if (newString === inputString) {
    return true;
  } else {
    return false;
  }
}

isPalindrome('aabaa');

// Determine the highest possible product of two adjacent numbers in an array //

function adjacentElementsProduct(inputArray) {
  var highestValue = inputArray[0] * inputArray[1];
  for (var i = 0; i < inputArray.length; i++) {
    var currentValue = inputArray[i] * inputArray[i + 1];
    if (currentValue > highestValue) {
      highestValue = currentValue;
    }
  }
  return highestValue;
}

adjacentElementsProduct([3, 6, -2, -5, 7, 3]);
