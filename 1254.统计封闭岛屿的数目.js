/*
 * @lc app=leetcode.cn id=1254 lang=javascript
 *
 * [1254] 统计封闭岛屿的数目
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
    let res = 0;
    const m = grid.length;
    const n = grid[0].length;
    for (let i = 0; i < m; i++) {
        DFS(grid, i, 0)
        DFS(grid, i, n - 1,);
    }
    for (let j = 0; j < n; j++) {
        DFS(grid, 0, j);
        DFS(grid, m - 1, j);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                res++;
                DFS(grid, i, j)
            }
        }
    }
    /**
     * 
     * @param {*} grid 
     * @param {*} i 
     * @param {*} j 
     * @returns {Boolean} 是否是封闭岛屿
     */
    function DFS(grid, i, j) {
        if (i < 0 || j < 0 || i >= m || j >= n) return;
        // 这个位置是水的话
        if (grid[i][j] === 1) return;
        grid[i][j] = 1
        DFS(grid, i - 1, j)
        DFS(grid, i + 1, j)
        DFS(grid, i, j - 1)
        DFS(grid, i, j + 1)
    }
    return res;
};
// @lc code=end

