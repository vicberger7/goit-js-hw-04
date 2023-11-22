function makeArray(firstArray, secondArray, maxLength) {
  let joinedArray = firstArray.concat(secondArray);
  if (joinedArray.length > maxLength) {
    joinedArray.length = maxLength;
    }
    return (joinedArray);
 }
