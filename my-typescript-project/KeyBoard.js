// keyboard is a 2D array representing our keyboard. 
// vowels is an array containing the vowel keys. 
// knightMoves is an array of all possible knight moves in terms of row and column changes.
var keyboard = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'J'],
    ['K', 'L', 'M', 'N', 'O'],
    ['', '1', '2', '3', '']
];
var vowels = ['A', 'E', 'I', 'O'];
var knightMoves = [
    [-2, -1], [-2, 1],
    [-1, -2], [-1, 2],
    [1, -2], [1, 2],
    [2, -1], [2, 1]
];
// This is a helper function that checks 
// if a given (row, col) pair is valid (within the keyboard and not an empty cell).
function isValid(row, col) {
    return row >= 0 && col >= 0 && row < 4 && col < 5 && keyboard[row][col] !== '';
}
//Apply DFS 
function dfs(row, col, depth, vowelCount) {
    if (vowelCount > 2) {
        return 0;
    }
    if (depth === 10) {
        return 1;
    }
    var count = 0;
    for (var _i = 0, knightMoves_1 = knightMoves; _i < knightMoves_1.length; _i++) {
        var _a = knightMoves_1[_i], dr = _a[0], dc = _a[1];
        var newRow = row + dr;
        var newCol = col + dc;
        if (isValid(newRow, newCol)) {
            var isVowel = vowels.includes(keyboard[newRow][newCol]) ? 1 : 0;
            // const isVowel = vowels.includes(keyboard[newRow][newCol]) ? 1 : 0;
            count += dfs(newRow, newCol, depth + 1, vowelCount + isVowel);
            // console.log(`At depth ${depth}, count is ${count}`);
        }
    }
    return count;
}
var totalSequences = 0;
for (var row = 0; row < 4; row++) {
    for (var col = 0; col < 5; col++) {
        if (keyboard[row][col] !== '') {
            var isVowel = vowels.includes(keyboard[row][col]) ? 1 : 0;
            // const isVowel = vowels.includes(keyboard[row][col]) ? 1 : 0;
            totalSequences += dfs(row, col, 1, isVowel);
            // console.log(totalSequences,"totalSequences");
        }
    }
}
console.log(totalSequences, "totalSequences");
