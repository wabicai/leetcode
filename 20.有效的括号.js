/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const map = new Map();
    map.set(")", "(")
    map.set("]", "[")
    map.set("}", "{")

    const stack = [];
    for (let i of s) {
        if (map.has(i)) {
            const current = stack.pop();
            if (current !== map.get(i)) return false;
        } else {
            stack.push(i);
        }
    }
    return stack.length === 0;
};
// @lc code=end

