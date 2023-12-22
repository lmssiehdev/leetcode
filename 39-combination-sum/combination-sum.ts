function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
    
    function dfs(slate, idx, sum) {
            
        if ( sum === target) {
            result.push([...slate])
            return;
        }
        
        for (let i = idx; i < candidates.length; i++) {
            const candidate = candidates[i];

            if ( sum + candidate > target) continue;
            
            slate.push(candidate);
            dfs(slate, i, sum + candidate)
            slate.pop()
        }
            
    }
    dfs([], 0, 0)

    return result;
}
// [2, 3, 6, ]
