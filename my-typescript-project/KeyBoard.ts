// keyboard is a 2D array representing our keyboard. 
// vowels is an array containing the vowel keys. 
// knightMoves is an array of all possible knight moves in terms of row and column changes.
const keyboard: string[][] = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'J'],
    ['K', 'L', 'M', 'N', 'O'],
    [ '', '1', '2', '3', '']
  ];
  
const vowels: string[] = ['A', 'E', 'I', 'O'];
const knightMoves: number[][] = [
    [-2, -1], [-2, 1],
    [-1, -2], [-1, 2],
    [1, -2],  [1, 2],
    [2, -1],  [2, 1]
  ];
  
// This is a helper function that checks 
// if a given (row, col) pair is valid (within the keyboard and not an empty cell).
function isValid(row: number, col: number): boolean {
    return row >= 0 && col >= 0 && row < 4 && col < 5 && keyboard[row][col] !== '';
  }

//Apply DFS 
function dfs(row: number, col: number, depth: number, vowelCount: number): number {
    if (vowelCount > 2) {
      return 0;
    }
  
    if (depth === 10) {
      return 1;
    }
  
    let count = 0;
    for (const [dr, dc] of knightMoves) {
      const newRow = row + dr;
      const newCol = col + dc;
      if (isValid(newRow, newCol)) {
        const isVowel = (vowels as any).includes(keyboard[newRow][newCol]) ? 1 : 0;

        // const isVowel = vowels.includes(keyboard[newRow][newCol]) ? 1 : 0;
        count += dfs(newRow, newCol, depth + 1, vowelCount + isVowel);
        // console.log(`At depth ${depth}, count is ${count}`);
      }
    }
    return count;
  }
  
let totalSequences = 0;
for (let row = 0; row < 4; row++) {
  for (let col = 0; col < 5; col++) {
    if (keyboard[row][col] !== '') {
      const isVowel = (vowels as any).includes(keyboard[row][col]) ? 1 : 0;

        // const isVowel = vowels.includes(keyboard[row][col]) ? 1 : 0;
      totalSequences += dfs(row, col, 1, isVowel);
      // console.log(totalSequences,"totalSequences");
      }
    }
  }
  
  console.log(totalSequences,"totalSequences");
  