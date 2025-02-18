var lengthOfLongestSubstring = function(s) {
    let n = s.length;
    let set = new Set();
    let maxLength = 0, i = 0, j = 0;

    while (i < n && j < n) {
        if (!set.has(s[j])) {
            set.add(s[j++]);
            console.log(Array.from(set));
            maxLength = Math.max(maxLength, j - i);
        } else {
            set.delete(s[i++]);
        }
    }
    return {maxLength, arr : Array.from(set)};
};

console.log(lengthOfLongestSubstring("abaca")); // Output: 3
//console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
//console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3