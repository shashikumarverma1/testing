const { findKthSmallest, findKthLargest } = require("./kthElement");

describe("findKthSmallest", () => {
  test("finds the 1st smallest element", () => {
    expect(findKthSmallest([3, 1, 2, 4, 5], 1)).toBe(1);
  });

  test("finds the 2nd smallest element", () => {
    expect(findKthSmallest([3, 1, 2, 4, 5], 2)).toBe(2);
  });

  test("finds the 5th smallest element", () => {
    expect(findKthSmallest([3, 1, 2, 4, 5], 5)).toBe(5);
  });

  test("throws an error when k is out of bounds (negative)", () => {
    expect(() => findKthSmallest([3, 1, 2, 4, 5], -1)).toThrow(
      "K is out of bounds"
    );
  });

  test("throws an error when k is out of bounds (exceeds array length)", () => {
    expect(() => findKthSmallest([3, 1, 2, 4, 5], 6)).toThrow(
      "K is out of bounds"
    );
  });

  test("finds the 1st smallest element in an array with duplicates", () => {
    expect(findKthSmallest([3, 1, 2, 4, 5, 1], 1)).toBe(1);
  });

  test("finds the 3rd smallest element in an array with duplicates", () => {
    expect(findKthSmallest([3, 1, 2, 4, 5, 1], 3)).toBe(2);
  });
});

describe("find largest elememt" , ()=>{
test("find 1st largest " , () => {
    expect(()=>findKthLargest([1,2,6,5,4,3,3] , -3)).toThrow("K is out of bounds")
});
test("finds" , ()=>{
  expect(()=>findKthLargest([] , 2)).toThrow("K is out of bounds")
});
test("finds" , ()=>{
  expect(()=>findKthLargest([9,8,4,1,2,5,6,7,8,9,0] , -200)).toThrow("K is out of bounds")
});
})


