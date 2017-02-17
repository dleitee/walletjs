# "Mo money, No problems" - walletjs

Now you can handle money without headaches!

## Install

```
npm install --save walletjs
```

## Usage

```javascript
import walletjs from 'walletjs'

const wallet = walletjs.init(100)
console.log(wallet.toString()) => '100,00'
console.log(wallet.currency()) => '$100,00'
```

## API

**constructor(value, locale, currency)**

Create a new Wallet object with the initial value.
  - *{number}* **value** - The value to put on wallet
  - *{number}* [**locale**=en] - The locale for this wallet
  - *{number}* [**currency**=USD] - The currency to use in currency formatting.

```javascript
import Wallet from 'walletjs'
const amount = new Wallet(100)
```

**static init(value, [ locale, currency ])** -> Wallet

Create a new Wallet object with the initial value.
  - *{number}* **value** - A value to put on wallet
  - *{number}* [**locale**=en] - The locale for this wallet
  - *{number}* [**currency**=USD] - The currency to use in currency formatting.

```javascript
import Wallet from 'walletjs'
const amount = Wallet.init(100)
```

**static fromString(value, [ locale, currency ])** -> Wallet

Create a new Wallet object from String value
  - *{string}* **value** - A value to put on wallet
  - *{number}* [**locale**=en] - The locale for this wallet
  - *{number}* [**currency**=USD] - The currency to use in currency formatting.

```javascript
import Wallet from 'walletjs'
const amount = Wallet.fromString(100)
```

**add(value)** -> Wallet

Adds a value to wallet
  - *{string}* **value** - A value to put on wallet

```javascript
import Wallet from 'walletjs'
const amount = Wallet.fromString(100)
const newAmount = amount.add(100)
```

**toCurrency([currencyDisplay, { currency }])** -> String

Return a formatted currency of Wallet
  - *{number}* [**currencyDisplay**=symbol] - How to display the currency in currency formatting.
  - *{number}* [**currency**=USD] - The currency to use in currency formatting.

```javascript
import Wallet from 'walletjs'
const amount = Wallet.init(100)
amount.toCurrency() // => $100.00
```

**toString()** -> String

Return a formatted value of Wallet

```javascript
import Wallet from 'walletjs'
const amount = Wallet.init(100)
amount.toString() // => 100.00
```

## Currency

 - **USD**: Dollar
 - **BRL**: Real
 - **EUR**: Euro

```javascript
import { CURRENCY_BRL, CURRENCY_USD, CURRENCY_EUR} from 'walletjs'
```

## Display Currency

 - **DISPLAY_CODE**: 'USD'
 - **DISPLAY_SYMBOL**: '$'
 - **DISPLAY_NAME**: 'Dollar'

```javascript
import { DISPLAY_CODE, DISPLAY_SYMBOL, DISPLAY_NAME} from 'walletjs'
```
