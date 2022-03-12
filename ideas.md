- balance chemical equations
- do molar conversions

## Balence chemical equations

### Needed data

- number of reactants
- number of products
- reactant formulas
- product formulas

1. check for elecments on both sides of the equation
2. split equation into different elemets with their subscripts

```
CO2 + H(OH)2 -> COH + HO
```

new formula when

- `+`

switch to products

- `->`

if `(` encountered enter polyatomic mode:

new element when

1. New uppercase letter

---

1. separate input string into array

```js
const input = 'NaCl2 + H2O -> NaO + HCl';
```

```js
input.separate(' ');
```

```js
const separatedFormula = ['NaCl2', '+', 'H2O', '->', 'NaO', '+', 'HCl'];
```

2. sort formula into reactants and products

```js
for (let i = 0, i < separatedFormula.length, i++ ) {

}

```

```js
const stage1 = {
  reactants: ['NaCl2', 'H20'],
  products: ['NaO', 'HCl'],
};
```

2. separate chemical formulas into individual elements / polyatomic ions

```js
const stage2 = {
  reactants: ['Na', 'Cl2', 'H2', 'O'],
  products: ['Na', 'O', 'H', 'Cl'],
};
```

3. separate polyatomic ions into elements (change example)

```js
const stage3 = {
  reactants: {
    NaCl2: ['Na', 'Cl2'],
    H2O: ['H2', 'O'],
  },
  products: ['Na', 'O', 'H', 'Cl'],
};
```

4. count elements

```js
const stage3 = {
  reactants: {
    Na: 1,
    Cl: 2,
    H: 2,
    O: 1,
  },
  products: {
    Na: 1,
    Cl: 1,
    H: 1,
    O: 1,
  },
};
```
