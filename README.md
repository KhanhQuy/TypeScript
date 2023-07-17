# Knight Key Sequences
This project calculates all possible 10-key sequences on a given keyboard layout where each subsequent key press must be a knight's move away (like in chess) from the previous key, with no more than 2 vowels per sequence. Repeat keys are allowed and no topological wrapping of the keyboard is permitted.

# Problem-sloving:
To solve the problem, I implemented a Breadth-First Search (BFS) algorithm. BFS is typically used for pathfinding problems or when one needs to explore all possible paths in a graph. In this scenario, I treated the keys on the keyboard as nodes of a graph, with knight's moves acting as the edges connecting these nodes. 

Throughout the code, I kept track of several important variables: 

1. I ensured all knight moves remained within the bounds of the keyboard and were only on valid keys, to avoid counting invalid paths. 
2. I monitored the number of vowels used in a sequence and disallowed any sequence with more than two vowels. 
3. I recorded the length of the sequences, ensuring that they were only counted when they reached a length of ten. 

My approach to managing these variables involved using a dictionary to store the count of sequences at each point, which ensured efficient lookups and updates. 


## Keyboard Layout
The keyboard layout is as follows:


[A] [B] [C] [D] [E]<br />
[F] [G] [H] [I] [J]<br />
[K] [L] [M] [N] [O]<br />
[None] [1] [2] [3] [None]<br />
     
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
