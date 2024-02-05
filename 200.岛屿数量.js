/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let res = 0;
    const m = grid.length;
    const n = grid[0].length;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                res++;
                DFS(grid, i, j)
            }
        }
    }
    function DFS(grid, i, j) {
        if (i >= m || i < 0 || j >= n || j < 0) return;
        if (grid[i][j] === '0') return
        grid[i][j] = '0'
        DFS(grid, i - 1, j)
        DFS(grid, i + 1, j)
        DFS(grid, i, j - 1)
        DFS(grid, i, j + 1)
    }
    DFS(grid, 0, 0)
    return res
};
// @lc code=end

