/*
 * @lc app=leetcode.cn id=377 lang=javascript
 *
 * [377] 组合总和 Ⅳ
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  //   let res = 0;
  //   let currCount = 0;
  //   function backtrack() {
  //     if (currCount === target) {
  //       res++;
  //       return;
  //     }
  //     for (let i = 0; i < nums.length; i++) {
  //       if (currCount > target) {
  //         return;
  //       }
  //       currCount += nums[i];
  //       backtrack(i);
  //       currCount -= nums[i];
  //     }
  //   }
  //   backtrack();
  //   return res;
  let arr = new Array(target + 1).fill(0);
  arr[0] = 1;
  for (let i = 1; i <= target; i++) {
    for (let num of nums) {
      if (i >= num) {
        arr[i] += arr[i - num];
      }
    }
  }
  return arr[target];
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = combinationSum4;
// @after-stub-for-debug-end
