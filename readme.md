# ChemHelp - CSP Create Performance Task

![language: javascript](https://img.shields.io/badge/language-javascript-yellow)
![environment: node](https://img.shields.io/badge/environment-node-brightgreen)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4)

A command-line tool that helps with basic chemistry calculations.

- [Installation](#installation)
- [Usage](#usage)
- [Issues](#issues)
- [License](#license)

## Installation

**This program requires [Node.js](https://nodejs.org/en/)**

1. Clone this repository to your machine

```
git clone https://github.com/mackrusing/csp-create-performance-task.git
```

2. Install all dependences using npm. To exclude dev dependencies use the `--production` flag (if you don't want to install prettier)

```
npm install
npm install --production
```

3. Give yourself execute permissions for the `main.js` file (unix-like systems only).

```
chmod +x main.js
```

4. Link package

```
npm link
```

## Usage

```
chemhelp <command>
```

Solve a simple stoich problem (with a balenced equation and one given value).

```
chemhelp solve
```

Convert from moles to grams or vice versa.

```
chemhelp convert
```

### Format

measure

```
1 mole H2O
2 mol CO2
3 moles CH4
```

```
1 gram H2O
2 g CO2
3 grams CH4
```

equation

```
2H2O
```

## Issues

If you find any bugs, feel free to open an issue on this project's [issue page](https://github.com/mackrusing/rest-api/issues).

## License

All source code is licesnsed under the [MIT License](./license.md). Feel free to use any part of this repo in your own projects!
