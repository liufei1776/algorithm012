var reverseWords = function(s) {
    let arr = s.trim().split(/ +/);
    return arr.reverse().join(' ');
};
