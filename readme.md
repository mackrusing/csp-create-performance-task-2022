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

ChemHelp is a command-line tool for performing simple chemistry related calculations including mass-to-mole conversion and simple stoichiometry.

```
chemhelp <command>
```

### Core commands

ChemHelp currently has two core commands: `convert` and `solve`. These commands **convert** grams to moles / moles to grams and **solve** stoich equations respectfully.

```
chemhelp convert
chemhelp solve
```

### Input formats

When executing a command, the user will be prompted to provide input in the following formats.

#### Equations

Enter subscripts as normal characters and the "reacts to form arrow" as `->` or `=`. Be sure to capitalize elements properly; "CO" (carbon monoxide) and "Co" (cobalt) will result in very different outcomes.

CH₄ + 2O₂ → CO₂ + 2H₂O

```
CH4 + 2O2 -> CO2 + 2H2O
CH4 + 2O2 = CO2 + 2H2O
```

#### Measures

Enter measurements in the following order: ammount, unit, compound formula. Each element must be separated by a space. All measures must be in grams or moles.

```
1 mole H2O
2.5 mol CO2
328 moles CH4
```

```
1 gram H2O
2.5 g CO2
328 grams CH4
```

## Issues

If you find any bugs, feel free to open an issue on this project's [issue page](https://github.com/mackrusing/rest-api/issues).

## License

All source code is licesnsed under the [MIT License](./license.md). Feel free to use any part of this repo in your own projects!
