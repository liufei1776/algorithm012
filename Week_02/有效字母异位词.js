/**
 * ============== Solution 1 ==================
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false;

    // let s_sorted = [...(s.toLowerCase())].sort();
    // let t_sorted = [...(t.toLowerCase())].sort();
    // console.log('s', s_sorted);
    // console.log('t', t_sorted)
    // return s_sorted.join('') == t_sorted.join('');

    return [...(s.toLowerCase())].sort().join('') == [...(t.toLowerCase())].sort().join('');
};

let s = "anagram", t = "nagaram";
console.log(isAnagram(s,t));

s = 'rat'; t = "car";
console.log(isAnagram(s,t));

/**
 * 分析：
 * 1. 暴力法：对字符串排序后，进行比较
 * 2. 时间复杂位 NlogN，主要取决于 sort 方法
 * 3. 空间复杂度位 N, [...str]创建了一个数组  
 */



 /**
 * ============== Solution 2 ==================
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false;

    let map = new Map();
    for(el of s) {
        if(!map.has(el)) {
            map.set(el, 1);
        }
        else {
            map.set(el, map.get(el)+1);
        }
    }

    console.log(map);

    for(el of t) {
        if(!map.has(el)) {
            // 如果有一个字母不在哈希表
           return false
        }
        else {
            map.set(el, map.get(el)-1);

            if(map.get(el) < 0) return false;
        }
    }

    return true;
};

let s = "anagram", t = "nagaram";
console.log(isAnagram(s,t));

s = 'rat'; t = "car";
console.log(isAnagram(s,t));


s = 'aacc'; t = "ccac";
console.log(isAnagram(s,t));


/**
 * 分析：
 * 1. 建立一张哈希表，统计每个字母的出现频率。 如果是异位词，最后每个计数器应该位0
 * 2. 时间复杂位 N，在于 for 循环对每个字母进行统计
 */





 /**
 * ============== Solution 3 ==================
 */

var isAnagram = function(s, t) {
    if(s.length != t.length) return false;

    let arr = new Array(26).fill(0); // [0,0,....]

    for(let i=0; i<s.length; i++) {
        arr[s.charCodeAt(i) - 'a'.charCodeAt()]++;
        arr[t.charCodeAt(i) - 'a'.charCodeAt()]--;
    }

    // get value directly
    for(el of arr) {
        if(el != 0) return false;
    }

    return true;

}

let s = "anagram", t = "nagaram";
console.log(isAnagram(s,t));

s = 'rat'; t = "car";
console.log(isAnagram(s,t));


s = 'aacc'; t = "ccac";
console.log(isAnagram(s,t));


/**
 * 分析：
 * 1. 原理同 solution2，运用 哈希表 建立统计表。只是这里的 哈希key 是 s.charCodeAt(i) - 'a'.charCodeAt()
 * 2. 时间复杂位 N，在于 for 循环对每个字母进行统计
 */