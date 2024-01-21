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
   git clone https://github.com/jiviglianco/Zoo-challenge
2. Navigate to the project directory:

    ```bash
    cd Zoo-challenge
3. Install dependencies:

    ```bash
    npm install
### Usage
1. Compile TypeScript code:

    ```bash
    npm run build
2. Run the command:

    ```bash
    npm run speak
### Testing
1. Run the command:

    ```bash
    npm run test
### Project Structure
- `__tests__`: Contains test files.
- `src/`: Contains TypeScript source files.
- `dist/`: Contains compiled JavaScript files.
- `package.json`: Node.js project configuration.
- `tsconfig.json`: TypeScript compiler configuration.
- `jest.config.ts`: Jest configuration.