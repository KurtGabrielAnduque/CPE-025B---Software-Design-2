/**Write firstUniqueChar to find the first character in a string that appears only once. 
 * The search must be case-insensitive (e.g., 's' and 'S' are the same), 
 * but the function must return the character in its original casing from the string. 
 * An O(n2) nested loop solution is considered inefficient for this level; use a frequency map.

Expected Output: T
Expected Output: c

Template and Test Code:

*/
function firstUniqueChar(str) {
    const s = str.toLowerCase();
    const count = {};
    for (const char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (count[s[i]] === 1) {
            return str[i];
        }
    }
}

// Test Code
console.log(firstUniqueChar('sTreSS'));
console.log(firstUniqueChar('aabbc'));
