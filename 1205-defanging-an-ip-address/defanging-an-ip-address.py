class Solution:
    def defangIPaddr(self, address: str) -> str:
        result = ""
        for i in range(len(address)):
          curr = address[i]
          if curr == ".":
            result += "[.]"
          else:
            result += curr

        return result