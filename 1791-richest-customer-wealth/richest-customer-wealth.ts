function maximumWealth(accounts: number[][]): number {
    return accounts.reduce((count, bank) => {
      const bankSum = bank.reduce((count, sum) => sum + count, 0)
      return Math.max(count, bankSum)
    }, 0)
};