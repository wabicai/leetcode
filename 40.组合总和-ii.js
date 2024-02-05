/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let res = [];
  let path = [];
  let currCount = 0;
  candidates.sort();
  function backtrack(start) {
    if (currCount === target) {
      res.push([...path]);
      return;
    }
    if (currCount > target) return;
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue;
      }
      currCount += +candidates[i];
      path.push(candidates[i]);
      backtrack(i + 1);
      currCount -= +candidates[i];
      path.pop();
    }
  }
  backtrack(0);
  return res;
};
// @lc code=end
