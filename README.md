# **Installation**

Using npm:

```
npm i payments-icons-library
```

Note: add --save if you are using npm < 5.0.0

In Node.js:

```
var Icons = require('payments-icons-library');
```

# Documentation

Payments-icons-library can help you fetch icons for most of the payment methods in different sizes and format.Icons can be fetched individually or in bulk format.
 
## Basic Implementation:
```
import Icons from "payments-icons-library";

let sbiLogo = Icons.getIcon('sbi');
// returns {icon_name: “sbi”, icon_url: “https://cashfreelogo.cashfree.com/assets_images/pg/nb/32/sbi.png“, icon_version: “1”}

let [sbiLogo, auLogo] = Icons.getIcons(['sbi', 'au'];
// returns [{icon_name: “sbi”, icon_url: “https://cashfreelogo.cashfree.com/assets_images/pg/nb/32/sbi.png“, icon_version: “1”}, ...]

let banksLogo = Icons.getModesIcons('cardbanks');
// returns [{icon_name: “sbi”, icon_url: “https://cashfreelogo.cashfree.com/assets_images/pg/nb/32/sbi.png“, icon_version: “1”}, ...]
```