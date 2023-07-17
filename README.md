# Knight Key Sequences
This project calculates all possible 10-key sequences on a given keyboard layout where each subsequent key press must be a knight's move away (like in chess) from the previous key, with no more than 2 vowels per sequence. Repeat keys are allowed and no topological wrapping of the keyboard is permitted.

## Keyboard Layout
The keyboard layout is as follows:


[A] [B] [C] [D] [E]<br />
[F] [G] [H] [I] [J]<br />
[K] [L] [M] [N] [O]<br />
[None] [1] [2] [3] [None]<br />

# Problem-sloving

In problem-solving scenarios that involve traversing or searching a graph-like structure, understanding the nature of the problem and aligning it with the appropriate algorithm is critical. For the task of calculating all potential 10-key sequences on a keyboard, Depth-First Search (DFS) emerges as an ideal choice over its counterpart, Breadth-First Search (BFS).

DFS, with its inherent ability to explore a path to its deepest extent before backtracking, aligns perfectly with the problem of discovering all possible 10-key sequences. DFS exhaustively explores each path, ensuring that all sequences reaching the desired depth of ten key presses are considered. The problem's constraints, such as limiting the number of vowels in a sequence, can lead to premature termination of a path, which DFS can handle efficiently with its innate backtracking mechanism.

## Project Setup
### Prerequisites
. Node.js
. npm

### Installation
1. Clone the repository:
* `git clone [https://github.com/your-username/knight-key-sequences.git1](https://github.com/KhanhQuy/TypeScript.git)`

2. Install the project dependencies:
* `npm install`

3. Compile the TypeScript code:
* `npx tsc`

4. Run the program with Node.js:
* `node KeyBoard.js`

5. Run the program with TypeScript:
* `ts-node KeyBoard.ts`

This will print the total number of valid 10-key sequences to the console.
