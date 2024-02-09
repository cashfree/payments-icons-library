# Payment Icons by Cashfree Payments
![License](https://img.shields.io/badge/license-MIT-blue) ![Release](https://img.shields.io/badge/release-v1.1.2-blue) ![TestCases](https://img.shields.io/badge/test_cases-passed-brightgreen) ![Build](https://img.shields.io/badge/build-stable-brightgreen) 


Payments-icons-library can help you fetch icons for most of the payment methods in different sizes and format. Icons can be fetched individually or in bulk format.

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