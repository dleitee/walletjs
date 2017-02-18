# "Mo money, No problems" - walletjs

[![Build Status](https://travis-ci.org/dleitee/walletjs.svg?branch=master)](https://travis-ci.org/dleitee/walletjs)
[![Coverage Status](https://coveralls.io/repos/github/dleitee/walletjs/badge.svg?branch=master)](https://coveralls.io/github/dleitee/walletjs?branch=master)

Now you can handle money without headaches!

[API Reference](https://github.com/dleitee/walletjs/wiki/API-Reference)

## Install

```
npm install --save walletjs
```

## Usage

```javascript
import Wallet, { Money } from 'walletjs'

const money = Money.init(100)
const wallet = Wallet.init(money)
console.log(wallet.getAmount(money.currency))

const money2 = Money.init(100)
const newWallet = wallet.add(money2)
console.log(newWallet.getAmount(money2.currency))
```


