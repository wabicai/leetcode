/*
 * @lc app=leetcode.cn id=698 lang=javascript
 *
 * [698] 划分为k个相等的子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
    //   target 代表每个桶的总和
    const sum = nums.reduce((a, b) => a + b);
    const target = sum / k;
    const bucket = new Array(k).fill(0)
    if (sum % k !== 0) return false;

    // // 思路一：每个数字都要进入每一个桶里了，以index，即数字为视角。
    // /**
    //  *
    //  * @param {Array} bucket 当前调用栈里bucket的总和
    //  * @param {Number} index 当前遍历到的数字的索引
    //  * @returns
    //  */
    // function backtrack(bucket, index) {
    //     // 找到了最后一个数字，终止条件
    //     console.log(index, bucket)
    //     if (index === nums.length) {
    //         if (bucket.every((item) => item === target)) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     }
    //     // 遍历每一个数字
    //     for (let i = 0; i < bucket.length; i++) {
    //         //   计算当前桶里的数字总和, 这里这个桶超过了
    //         if (bucket[i] + nums[index] > target) continue;
    //         bucket[i] += nums[index];
    //         if (backtrack(bucket, index + 1)) {
    //             return true;
    //         }
    //         bucket[i] -= nums[index];
    //     }
    //     return false
    // }
    // return backtrack(bucket, 0)

    // 思路二： 以桶为视角，每个数字都要进入桶中.
    /**
     * @param {Number} bucketIndex 桶的索引
     * @param {Number} numsIndex nums开始的索引，因为只能进入一个桶
     */
    const used = new Array(nums.length).fill(false)
    function backtrack(bucketIndex, numsIndex) {
        if (bucketIndex === bucket.length) {
            return bucket.every(item => item === target)
        }
        if (bucket[bucketIndex] === target) {
            return backtrack(bucketIndex + 1, 0)
        }
        for (let i = numsIndex; i < nums.length; i++) {
            if (used[i]) continue;
            if (bucket[bucketIndex] + nums[i] > target) continue
            used[i] = true;
            bucket[bucketIndex] += nums[i];
            if (backtrack(bucketIndex, i + 1, used)) {
                return true
            }
            used[i] = false;
            bucket[bucketIndex] -= nums[i];
        }
        return false
    }
    return backtrack(0, 0, used)
};
// @lc code=end
