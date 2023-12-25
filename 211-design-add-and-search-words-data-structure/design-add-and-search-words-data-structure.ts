class TrieNode {
  isWord: boolean;
  children: Map<string, TrieNode>;
  constructor() {
    this.isWord = false;
    this.children = new Map();
  }
}

class WordDictionary {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word: string): void {
   let curr = this.root;

      for (let char of word) {

          if (curr.children.has(char) ) {
            curr = curr.children.get(char)
            continue;
          }

          const newNode = new TrieNode();
          curr.children.set(char, newNode);
          curr = newNode;
      
      }
    curr.isWord = true;
  }

  search(word: string): boolean {
    function helper(currNode, i) {
      if (i === word.length) return currNode.isWord;
      // if a dot
      if (word[i] === ".") {
        for (let node of currNode.children.values()) {
          if (helper(node, i + 1)) return true;
        }
        return false;
      }
      else {
        if (currNode.children.has(word[i])) {
          return helper(currNode.children.get(word[i]), i + 1);
        } else return false;
      }
      return true;
    }
    return helper(this.root, 0)
    
  }
}
