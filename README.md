# Knight Key Sequences
This project calculates all possible 10-key sequences on a given keyboard layout where each subsequent key press must be a knight's move away (like in chess) from the previous key, with no more than 2 vowels per sequence. Repeat keys are allowed and no topological wrapping of the keyboard is permitted.

## Keyboard Layout
The keyboard layout is as follows:


[A] [B] [C] [D] [E]
[F] [G] [H] [I] [J]
[K] [L] [M] [N] [O]
     [1]  [2]   [3]
     
## Project Setup
### Prerequisites
. Node.js
. npm

### Installation
1. Clone the repository:
* `git clone [https://github.com/your-username/knight-key-sequences.git1](https://github.com/KhanhQuy/TypeScript.git)`

2. Navigate into the project directory:
* `cd knight-key-sequences`

3. Install the project dependencies:
* `npm install`

4. Compile the TypeScript code:
* `npx tsc`

5. Run the program with Node.js:
* `node dist/index.js`

This will print the total number of valid 10-key sequences to the console.
