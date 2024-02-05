/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = [];
    let path = [];
    let used = Array.from(nums.length).fill(false);
    function DFS(path, used) {
        if (nums.length === path.length) {
            res.push(path.slice());
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            path.push(nums[i]);
            DFS(path, used)
            path.pop();
            used[i] = false;
        }
    }
    DFS(path, used)
    return res;
};


// @lc code=end

