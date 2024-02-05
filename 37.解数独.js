/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    const m = 9;
    const n = 9;

    // 对i，j进行穷举
    function backtrack(board, i, j) {
        if (j === n) {
            return backtrack(board, i + 1, 0)
        }
        if (i === m) return true
        if (board[i][j] != '.') {
            return backtrack(board, i, j + 1)
        }
        for (let num = 0; num < 9; num++) {
            if (!isValid(board, i, j, num)) continue
            board[i][j] = `${num}`;
            if (backtrack(board, i, j + 1)) {
                return true
            }
            board[i][j] = '.'
        }
        return false
    }
    function isValid(board, i, j, num) {
        for (let a = 0; a < 9; a++) {
            if (board[a][j] === `${num}`) return false;
            if (board[i][a] === `${num}`) return false;
            // if (board[Math.floor(i / 3) * 3 + Math.floor(a / 3)][Math.floor(j / 3) * 3 + a % 3] == num) return false
        }
        const startI = [Math.floor(i / 3)] * 3 + 1;
        const startJ = [Math.floor(j / 3)] * 3 + 1;
        for (let a = startI; a < startI + 2; a++) {
            for (let b = startJ; b < startJ + 2; b++) {
                if (board[a][b] === `${num}`) return false;
            }
        }
        return true
    }
    backtrack(board, 0, 0)
    return board
};
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    const m = 9;
    const n = 9;
    var backtrack = function (board, i, j) {
        if (j == n) {
            // 穷举到最后一列的话就换到下一行重新开始。
            return backtrack(board, i + 1, 0);
        }
        if (i == m) {
            // 找到一个可行解，触发 base case
            return true;
        }

        if (board[i][j] != '.') {
            // 如果有预设数字，不用我们穷举
            return backtrack(board, i, j + 1);
        }

        for (var ch = '1'; ch <= '9'; ch++) {
            // 如果遇到不合法的数字，就跳过
            if (!isValid(board, i, j, ch))
                continue;

            board[i][j] = '' + ch;
            // 如果找到一个可行解，立即结束
            if (backtrack(board, i, j + 1)) {
                return true;
            }
            board[i][j] = '.';
        }
        // 穷举完 1~9，依然没有找到可行解，此路不通
        return false;
    }

    var isValid = function (board, r, c, n) {
        for (var i = 0; i < 9; i++) {
            // 判断行是否存在重复
            if (board[r][i] == n) return false;
            // 判断列是否存在重复
            if (board[i][c] == n) return false;
            // 判断 3 x 3 方框是否存在重复
            if (board[Math.floor(r / 3) * 3 + Math.floor(i / 3)][Math.floor(c / 3) * 3 + i % 3] == n)
                return false;
        }
        return true;
    }
    backtrack(board, 0, 0)
    return board;
}
// @lc code=end

