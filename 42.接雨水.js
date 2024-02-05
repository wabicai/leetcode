/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    // 方法一：for 循环，计算当前节点，左边最大，右边最大。如果都比当前节点大，以较小的那个，减掉当前的高度，就是当前节点能接的雨水
    // 时间 O(n) 空间(n);
    // if (height.length === 0) {
    //     return 0;
    // }
    // var n = height.length;
    // var res = 0;
    // // 数组充当备忘录
    // var l_max = new Array(n).fill(0);
    // var r_max = new Array(n).fill(0);
    // // 初始化 base case
    // l_max[0] = height[0];
    // r_max[n - 1] = height[n - 1];
    // // 从左向右计算 l_max
    // for (var i = 1; i < n; i++) {
    //     l_max[i] = Math.max(height[i], l_max[i - 1]);
    // }
    // // 从右向左计算 r_max
    // for (var i = n - 2; i >= 0; i--) {
    //     r_max[i] = Math.max(height[i], r_max[i + 1]);
    // }
    // // 计算答案
    // for (var i = 1; i < n - 1; i++) {
    //     res += Math.min(l_max[i], r_max[i]) - height[i];

    // }
    // return res;

    // 方法二：双指针
    // 时间 O(n) 空间 O(1)

    let res = 0;
    let left = 0;
    let right = height.length - 1;
    let l_max = 0;
    let r_max = 0;
    while (left < right) {
        l_max = Math.max(l_max, height[left]);
        r_max = Math.max(r_max, height[right]);
        if (l_max > r_max) {
            res += r_max - height[right];
            right--;
        } else {
            res += l_max - height[left];
            left++;
        }
    }
    return res;
};
// @lc code=end

