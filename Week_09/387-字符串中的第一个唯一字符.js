/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map();

    for(let i=0; i<s.length; i++) {
        let key = s[i];
        map.set(key, map.has(key) ? map.get(key) + 1 : 1);
    }

    // console.log(map);

    for(let i=0; i<s.length; i++) {
        if(map.get(s[i]) == 1) return i;
    }

    return -1;

};

console.log(firstUniqChar('loveleetcode'));

