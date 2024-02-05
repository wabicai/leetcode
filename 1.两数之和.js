/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // 暴力算法
    // let res = [];
    // for(let i = 0; i < nums.length; i++){
    //     let value = target - nums[i];
    //     for(let j = i + 1; j < nums.length; j++){
    //         if(nums[j] === value){
    //             res.push(i);
    //             res.push(j);
    //             return res;
    //         }
    //     }
    // }

    // 排序，双指针
    // 从小到大
    // let sortNums = nums.slice().sort((a, b) => a - b);
    // let lo = 0;
    // let hi = nums.length -1;
    // while(lo < hi){
    //     let currVal = sortNums[lo]+ sortNums[hi];
    //     if(currVal < target){
    //         lo++;
    //     }else if(currVal > target){
    //         hi--;
    //     }else if(currVal === target){
    //         const left = nums.indexOf(sortNums[lo]);
    //         const right = nums.lastIndexOf(sortNums[hi]);
    //         return [left, right]
    //     }
    // }

    //  哈希表 时间O(n) 空间O(n) new Map版
    // let result = [];
    //   let map = new Map();
    //   // 遍历一遍数组, 将数组中每个值和对应的索引 做一个映射
    //   for (let i = 0; i < nums.length; i++) {
    //     map.set(nums[i], i);
    //   }
    //   // 再遍历一遍数组
    //   for (let i = 0; i < nums.length; i++) {
    //     // 循环每一个元素的时候 都将目标值算出来
    //     let anotherOne = target - nums[i];
    //     // 检查 map 中是否包含这个元素，且对应的索引不能是当前的这个索引
    //     if (map.has(anotherOne) && map.get(anotherOne) !== i) {
    //       // 找到则放进数组
    //       result.push(i);
    //       result.push(map.get(anotherOne))
    //       break;
    //     }
    //   }
    //   // 返回结果
    //   return result
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = twoSum;
// @after-stub-for-debug-end