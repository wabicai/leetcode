/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    function nSumTarget(sortArray,n,start,target){
        let sz = nums.length;
        let res = [];
        if(n< 2||sz <n) return res;
        if(n===2){
            let lo = start;
            let hi = sz - 1;
            while(lo<hi){
                let sum = sortArray[lo] + sortArray[hi];
                let left = sortArray[lo];
                let right = sortArray[hi];
                if(sum < target){
                    while(lo<hi && sortArray[lo] === left) lo++;
                }else if(sum > target){
                    while(lo<hi && sortArray[hi] === right) hi--;
                }else{
                    res.push([left,right]);
                    while(lo<hi && sortArray[lo] === left) lo++;
                    while(lo<hi && sortArray[hi] === right) hi--;
                }
            }
        }else{
            for(let i = start;i<sz;i++){
                let sub = nSumTarget(nums, n-1, i + 1,target- nums[i] );
                for(let x of sub){
                    x.push(sortArray[i]);
                    res.push(x);
                }
                 while (i < sz - 1 && nums[i] == nums[i + 1]) i++;
            }
        }
        return res
    }
    return nSumTarget(nums.sort((a,b)=> a - b), 4,0, target) 
};

var fourSum = function(nums, target) {
    nums.sort((a,b)=>a-b)
    function nSumTarget(nums, n, start, target){
        let res = [];
        let sz = nums.length;
        if(n< 2||sz <n) return res;
        if(n === 2){
            let lo = start;
            let hi = sz - 1;
            while(lo < hi){
                let sum = nums[lo] + nums[hi];
                if(sum === target){
                    res.push([nums[lo], nums[hi]]);
                    while(lo < hi && nums[lo] === nums[lo + 1]) lo++;
                    while(lo < hi && nums[hi] === nums[hi - 1]) hi--;
                    lo++;
                    hi--;
                }else if(sum < target){
                    while(lo < hi && nums[lo] === nums[lo + 1]) lo++;
                    lo++;
                }else{
                    while(lo < hi && nums[hi] === nums[hi - 1]) hi--;
                    hi--;
                }
            }

        }else{
            for(let i = start; i < sz; i++) {
                let arr = nSumTarget(nums, n - 1, i + 1, target - nums[i])
                arr.map((item)=>{
                    item.push(nums[i])
                    res.push(item);
                })
                while(i < sz - 1 && nums[i] === nums[i + 1]) i++;
            }
        }
        return res;
    }
    return nSumTarget(nums, 4, 0, target)
}

// @lc code=end

