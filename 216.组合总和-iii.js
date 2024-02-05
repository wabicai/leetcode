/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let res = [];
  let currCount = 0;
  let path = [];
  function backtrack(start) {
    if (currCount == n && path.length == k) {
      res.push(path.slice());
      return;
    }
    for (let i = start; i < 10; i++) {
      if (path.length > k) return;
      if (currCount > n) return;
      currCount += i;
      path.push(i);
      backtrack(i + 1);
      path.pop();
      currCount -= i;
    }
  }
  backtrack(1);
  return res;
};
// @lc code=end
