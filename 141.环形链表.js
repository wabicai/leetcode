/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head) return false;
    let fast = head.next;
    let low = head;
    if (!fast || !fast.next) return false;
    while (fast && fast.next) {
        if (fast === low) return true;
        fast = fast.next.next;
        low = low.next;
    }
    return false;
};
// @lc code=end

