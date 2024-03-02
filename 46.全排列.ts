/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
    const res:number[][] = [];
    const path: number[] = [];
    const visited = new Array(nums.length).fill(false);
    
    function DFS(path, visited){
        if(path.length === nums.length) {
            res.push([...path]);
            return
        }
        for(let i = 0; i < nums.length;i++){
            if(visited[i]) continue;
            path.push(nums[i]);
            visited[i] = true;
            DFS(path, visited)
            path.pop();
            visited[i] = false;
        }
    }
    DFS(path, visited);
    return res;
};
// @lc code=end

