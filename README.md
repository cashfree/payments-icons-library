# Payment Icons by Cashfree Payments
Payments-icons-library can help you fetch icons for most of the payment methods in different sizes and format.Icons can be fetched individually or in bulk format.
<div align="left" id="results" class="">

<img src= "https://cashfreelogo.cashfree.com/assets_images/pg/card/svg/amex.svg">
<img src= "https://cashfreelogo.cashfree.com/assets_images/pg/card/svg/visa.svg">
<img src= "https://cashfreelogo.cashfree.com/assets_images/pg/card/svg/diners.svg">
<img src= "https://cashfreelogo.cashfree.com/assets_images/pg/card/svg/maestro.svg">
<img src= "https://cashfreelogo.cashfree.com/assets_images/pg/card/svg/mastercard.svg">
<img src= "https://cashfreelogo.cashfree.com/assets_images/pg/card/svg/mastercard.svg">
<img src= "https://cashfreelogo.cashfree.com/assets_images/pg/card/svg/rupay.svg">
</div>

## Documentation + Demo
Please visit [this page](https://cashfree.github.io/payments-icons-library/)
## Installation

### Using npm:

```
npm i payments-icons-library
```

Note: add --save if you are using npm < 5.0.0

### In Node.js:

```
var Icons = require('payments-icons-library');
```

### In vanilla JS
```
<script src="https://cdn.jsdelivr.net/gh/cashfree/payments-icons-library@latest/dist/image-library.js"></script>
```



 
## Basic Implementation:
#### ES6
```
import icons from "payments-icons-library";

let sbiIcon = icons.getIcon('sbi', 'sm');
//{"icon_name": "sbi", "icon_url": "https://cashfreelogo.cashfree.com/assets_images/pg/nb/32/sbi.png", "icon_version": "1"}

let [sbiIcon, auIcon] = icons.getIcons(['sbi', 'au'], 'sm');
//[{"icon_name": "sbi", "icon_url": "https://cashfreelogo.cashfree.com/assets_images/pg/nb/32/sbi.png", "icon_version": "1"}, ...]

let banksLogo = icons.getModesIcons('cardbanks', 'sm');
//[{"icon_name": "sbi", "icon_url": "https://cashfreelogo.cashfree.com/assets_images/pg/nb/32/sbi.png", "icon_version": "1"}, ...]

```
#### Vanilla JS
```
let sbiIcon = paymentsIcons.getIcon('sbi', 'sm');
//{"icon_name": "sbi", "icon_url": "https://cashfreelogo.cashfree.com/assets_images/pg/nb/32/sbi.png", "icon_version": "1"}

let [sbiIcon, auIcon] = paymentsIcons.getIcons(['sbi', 'au'], 'sm');
//[{"icon_name": "sbi", "icon_url": "https://cashfreelogo.cashfree.com/assets_images/pg/nb/32/sbi.png", "icon_version": "1"}, ...]

let banksLogo = paymentsIcons.getModesIcons('cardbanks', 'sm');
//[{"icon_name": "sbi", "icon_url": "https://cashfreelogo.cashfree.com/assets_images/pg/nb/32/sbi.png", "icon_version": "1"}, ...]

```