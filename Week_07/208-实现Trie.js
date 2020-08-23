/*
* 208 实现 Trie (前缀树)
* https://leetcode-cn.com/problems/implement-trie-prefix-tree/
*/


class Trie {
    constructor() {
        this.root = {};
        this.endOfWord = Symbol('end');   // Trick. Symbol is unique.
    }

    insert(word) {
        if(typeof word != 'string' || !word) {
            throw 'Pls give a valid string parameter';
        }

        let node = this.root;
        for(let char of word) {
            // 如果是已经存在的字母，继续向下探索；否则就是一个新的字母
            node[char] = node[char] || {frequency: 0}
            node = node[char];

        }
        // 添加结束符，表示单词结束
        node[this.endOfWord] = this.endOfWord;
    }

    search(word) {
        let node = this.root;
        for(let char of word) {
            if(!node[char]) return false;
            node = node[char]
        }

        node.frequency++;

        return node[this.endOfWord] === this.endOfWord;
    }

    startsWith(word) {
        let node = this.root;
        for(let char of word) {
            if(!node[char]) return false;
            node = node[char];
        }

        return true;
    }
}


// Test
let trie = new Trie();
trie.insert('word');
trie.insert('work');
trie.insert('world');


console.log('search work', trie.search('work'));
console.log('search world', trie.search('world'));

console.log('start with wor', trie.startsWith('wor'));
console.log('start with w', trie.startsWith('w'));
console.log('start with a', trie.startsWith('a'));

// console.log(trie.root);
console.log(JSON.stringify(trie.root,null,'  '));
/*
{
  "w": {
    "frequency": 0,
    "o": {
      "frequency": 0,
      "r": {
        "frequency": 0,
        "d": {
          "frequency": 0
        },
        "k": {
          "frequency": 1
        },
        "l": {
          "frequency": 0,
          "d": {
            "frequency": 1
          }
        }
      }
    }
  }
}
*/