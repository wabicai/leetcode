/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];
  let currCount = 0;
  let path = [];
  function backtrack(start) {
    if (currCount === target) {
      res.push([...path]);
      return;
    } else if (currCount > target) {
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      currCount += +candidates[i];
      path.push(candidates[i]);
      backtrack(i);
      path.pop();
      currCount -= +candidates[i];
    }
  }
  backtrack(0);
  return res;
};
// @lc code=end
