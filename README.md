# Payment Icons by Cashfree Payments
![License](https://img.shields.io/badge/license-MIT-blue) ![GitHub Release](https://img.shields.io/github/v/release/cashfree/payments-icons-library?color=blue) ![TestCases](https://img.shields.io/badge/test_cases-passed-brightgreen) ![Build](https://img.shields.io/badge/build-stable-brightgreen) ![NPM Downloads](https://img.shields.io/npm/dm/payments-icons-library?label=NPM%20Downloads&color=blue) ![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hm/cashfree/payments-icons-library?label=CDN%20Hits&color=blue) 


Payments-icons-library can help you fetch icons for most of the payment options in different sizes and formats. Icons can be fetched individually or in bulk format by entering the names or ifsc code.

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