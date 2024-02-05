/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let l_max = 0;
    let r_max = 0;
    let res = 0;
    while (left < right) {
        l_max = Math.max(l_max, height[left]);
        r_max = Math.max(r_max, height[right]);
        if (l_max > r_max) {
            res = Math.max(res, r_max * (right - left));
            right--;
        } else {
            res = Math.max(res, l_max * (right - left));
            left++;
        }
    }
    return res
};
// @lc code=end

