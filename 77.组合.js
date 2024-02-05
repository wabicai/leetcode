/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];
  let path = [];
  function backtrack(start) {
    if (path.length === k) {
      res.push([...path]);
      return;
    }
    for (let i = start; i < n; i++) {
      path.push(i + 1);
      backtrack(i + 1);
      path.pop();
    }
  }
  backtrack(0);
  return res;
};
// @lc code=end
