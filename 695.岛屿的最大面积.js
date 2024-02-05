/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let res = 0;
    const m = grid.length;
    const n = grid[0].length;
    // 遍历二维数组，找到所有岛屿
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                // 淹没岛屿，并更新最大岛屿面积
                res = Math.max(res, DFS(grid, i, j));
            }
        }
    }
    function DFS(grid, i, j) {
        if (i < 0 || j < 0 || i >= m || j >= n) { // 位置越界，返回
            return 0;
        }
        if (grid[i][j] === 0) { // 当前位置是海洋，返回
            return 0
        }
        grid[i][j] = 0; // 把当前位置淹没
        return DFS(grid, i + 1, j) + DFS(grid, i, j + 1) + DFS(grid, i - 1, j) + DFS(grid, i, j - 1) + 1;
    };
    return res
}
// @lc code=end

