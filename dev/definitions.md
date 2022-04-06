equation string

```
CH4 + 2O2 -> 2H2O + CO2
```

equation obj

```
{
  reactants: [
    {
      formula: 'CH4',
      coefficient: 1
    }
  ],
  products: [

  ]
}
```

bca table

```
  CH4  +  2O2  >  2H2O  +  CO2
  1.5  |  xs   |   0    |   0
 -1.5  |  -3   |   +3   |  +1.5
   0   |  xs   |   3    |   1.5
```

```
{
  CH4: {
    b: 1.5,
    c: -1.5,
    a: 0
  },
}
```

```
b:
if reactant + given; convert to moles and add to table
if reactant + not given; mark xs
if product; mark 0

c:
if reactant; negative (given * (given coeff / current coeff))
if product; positive (given * (given coeff / current coeff))

a:
current b + current c
```

20 grams CH4
