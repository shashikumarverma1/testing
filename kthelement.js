function findKthSmallest(arr, k) {
  if (k < 1 || k > arr.length) {
    throw new Error('K is out of bounds');
  }
  const sortedArr = [...arr].sort((a, b) => a - b);
  return sortedArr[k - 1];
}

function findKthLargest(arr, k) {
  if (k < 1 || k > arr.length) {
    throw new Error('K is out of bounds');
  }
  const sortedArr = [...arr].sort((a, b) => b - a);
  return sortedArr[k - 1];
}

module.exports = { findKthSmallest, findKthLargest };
