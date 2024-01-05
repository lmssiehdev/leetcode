class Solution:
    def finalValueAfterOperations(self, operations: List[str]) -> int:
        result = 0
        for i in range(len(operations)):
            curr = operations[i]
            if curr == "X++" or curr == "++X":
                result += 1
            else:
                result -= 1

        return result
