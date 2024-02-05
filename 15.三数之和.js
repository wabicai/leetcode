/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];
    nums.sort((a,b)=> a - b);
    for(let i = 0; i < nums.length; i++){ 
        let a = nums[i];
        let lo = i + 1;
        let hi = nums.length - 1;
       
        if( nums[i] === nums[i-1])continue
        while(lo < hi) {
            let value = a + nums[lo] + nums[hi];
            if(value === 0){
                res.push([a,nums[lo], nums[hi]])
                while(lo < hi && nums[lo] === nums[lo + 1]) lo++;
                while(lo < hi && nums[hi] === nums[hi - 1]) hi--;
                lo++;
                hi--;
            }else if(value > 0) {
                while(lo < hi && nums[hi] === nums[hi - 1]) hi--;
                hi--;
            }else if(value < 0) {
                while(lo < hi && nums[lo] === nums[lo + 1]) lo++;
                lo++;
            }
        }
    }
    return res;

};
// @lc code=end

