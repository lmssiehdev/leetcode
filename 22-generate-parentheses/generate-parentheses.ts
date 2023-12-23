function generateParenthesis(n: number): string[] {
    const result = []

    function dfs (open, close, s) {

      if ( n * 2 === s.length) {
        result.push(s);
        return;
      }

      if ( open != 0 ) {
        dfs(
          open - 1,
          close,
          s + "("
        )
      }

      if ( close != 0 && close > open ) {
        dfs(
          open,
          close - 1,
          s + ")"
        )
      }

    }

    dfs(n, n, "")
    return result;
};