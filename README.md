# Zoo Project

We are building a zoo inside a computer. Each animal species in our zoo has lots
of different, particular, behaviors, but all animals talk to each other in a similar
way. Specifically, they all implement a speak method, the output of which is the
arbitrary input string interspersed with an "animal sound" that is particular to that
type of animal. For example, the lion's speak function behaves like so:
> lion.speak( "I'm a lion" );\
 "I'm roar a roar lion roar"

The tiger's speak function behaves similarly but with a different sound:
> tiger.speak( "Lions suck" );\
 "Lions grrr suck grrr"
 
Please write logic and classes to support our zoo in JavaScript (using whatever
class model you like) with attention to code structure and readability.

## Getting Started

### Prerequisites

- Node.js: [Download and install Node.js](https://nodejs.org/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/zoo-project.git
2. Navigate to the project directory:

    ```bash
        cd Zoo
3. Install dependencies:

    ```bash
        npm install
### Usage
1. Compile TypeScript code:

    ```bash
        npx tsc
2. Run the compiled JavaScript file:

    ```bash
        node dist/index.js
### Project Structure
- `src/`: Contains TypeScript source files.
- `dist/`: Contains compiled JavaScript files.
- `package.json`: Node.js project configuration.
- `tsconfig.json`: TypeScript compiler configuration.