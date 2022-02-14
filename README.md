# Sivgen
Minimal (2.4 kb) and simple random emoji, integer and string generator written in typescript with no dependecies.

### Installation
Using npm
```bash
npm install sivgen
```
Using yarn
```bash
yarn add sivgen
```

### Usage
```javascript
import { integer, char, emoji } from "sivgen"

// Arguments - maximum number, number to exclude (optional)
const randomInteger = integer(100, 9);

// Arguments - length of string, exlcude number ( default false )
const randomString = char(2, true);

// Arguments - emoji to exclude (optional)
const randomEmoji = emoji("💡");
```

### Contributing
Currently this module is in development, contributions and pull requsts are welcome.
