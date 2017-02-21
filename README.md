# "Mo money, No problems" - walletjs

[![Build Status](https://travis-ci.org/dleitee/walletjs.svg?branch=master)](https://travis-ci.org/dleitee/walletjs)
[![Coverage Status](https://coveralls.io/repos/github/dleitee/walletjs/badge.svg?branch=master)](https://coveralls.io/github/dleitee/walletjs?branch=master)
[![Code Climate](https://codeclimate.com/github/dleitee/walletjs/badges/gpa.svg)](https://codeclimate.com/github/dleitee/walletjs)

**IMPORTANT:** We use [`big.js`](https://github.com/MikeMcl/big.js/) to handle huge numbers.

Now you can handle money without headaches!

[API Reference](https://github.com/dleitee/walletjs/wiki/API-Reference)

## Install

```
npm install --save walletjs
or
yarn add walletjs
```

## Examples

```javascript
import Wallet, { Money } from 'walletjs'

const money = Money.init(100)
const wallet = Wallet.init(money)
console.log(wallet.getAmount(money.currency))

const money2 = Money.init(100)
const newWallet = wallet.add(money2)
console.log(newWallet.getAmount(money2.currency))
```

## convertCurrency

```javascript
import Wallet, { Money } from 'walletjs'

const money = Money.init(100, { currency: 'BRL' } )
const brlWallet = Wallet.init(money)
const usdWallet = brlWallet.convertCurrency('BRL', 'USD', 3.09)

console.log(brlWallet.getAmount('BRL')) => '100.00'
console.log(brlWallet.getAmount('USD')) => '0.00'

console.log(usdWallet.getAmount('BRL')) => '0.00'
console.log(usdWallet.getAmount('USD')) => '309.00'
```

## no problems with float errors
```javascript
// on javascript
const a = 0.1
const b = 0.2
console.log(a + b) => 0.30000000000000004

// on walletjs
const money = Money.init(0.2)
money.add(0.1) => returns 0.3
```


