/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    // children
    g.sort((a,b) => a-b);
    // cookies
    s.sort((a,b) => a-b);

    let count = 0;
    let child = 0;

    for(let cookie=0; cookie<s.length; cookie++) {
        if(child<g.length && g[child]<=s[cookie]) {
            count++;
            child++;
        }
    }

    return count;

};