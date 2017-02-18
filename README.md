# "Mo money, No problems" - walletjs

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


