# CurryLimitReverse
## install

`npm i --save fup-curry-limit-reverse`


## Use

```
const curryLimitReverse = require('fup-curry-limit-reverse');

or es module

import curryLimitReverse from 'fup-curry-limit-reverse';

```


## Example

```
const sum    = (...numbers) => numbers
  .reduce((added, num) => added + num, 0); 
const sum2   = curryLimitReverse(2, sum); // (y, x) => y + x | y => x => y + x
const add1   = sum2(1);                       // (x) => 1 + x
const result = add1(2);                       // 3
const x      = sum2(10, 20);                  // 30
```
