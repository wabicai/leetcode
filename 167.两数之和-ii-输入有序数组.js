/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let lo = 0;
    let hi = numbers.length - 1;
    while(lo < hi){
        let sum = numbers[lo] + numbers[hi];
        if(sum == target){
            return [lo + 1, hi + 1];
        }else if(sum < target){
            lo++;
        }else{
            hi--;
        }
    }

};
// @lc code=end

