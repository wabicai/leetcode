/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [];
  let path = [];
  function backtrack(start, path) {
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      res.push([...path]);
      backtrack(i + 1, path);
      path.pop();
    }
  }
  backtrack(0, path);
  res.push([]);
  return res;
};
// @lc code=end
