# "Mo money, No problems" - walletjs

Now you can handle money without headaches!

[API Reference](https://github.com/dleitee/walletjs/wiki/API-Reference)

## Install

```
npm install --save walletjs
```

## Usage

```javascript
import { Money } from 'walletjs'

const amounr = Money.init(100)
console.log(amounr.toString()) => '100,00'
console.log(amounr.toCurrency()) => '$100,00'
```


