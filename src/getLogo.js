import { nameMapping } from "./nameMapping.js";
import utility from "./utility.js";
import { getImageSize } from "./helpers.js";

function formatNick(nick) {
    nick = nick?.toLowerCase() || "";
    nick = nick
        .replace(/-/g, "")
        .replace(/\bltd\b/g, "")
        .replace(/\blimited\b/g, "")
        .replace(/\bthe\b/g, "")
        .replace(/\bcoop\b/g, "cooperative")
        .replace(/\bpersonal\b/g, "")
        .replace(/\bretail\b/g, "")
        .replace(/\bcorporate\b/g, "")
        .replace(/\bnet\s*banking\b/g, "")
        .replace(/\bnetbanking\b/g, "")
        .replace(/\bbanking\b/g, "")
        .replace(/\bpaylater\b/g, "")
        .replace(/\bpay\s*later\b/g, "")
        .replace(/\bcredit\s*card\s*emi\b/g, "")
        .replace(/\bdebit\s*card\s*emi\b/g, "")
        .replace(/\bcardless\s*emi\b/g, "")
        .replace(/\bcardless\b/g, "")
        .replace(/ +/g, " ");

    // slice to first 4 letters if it is an ifsc code
    if (/^[a-z]{4}0[a-z0-9]{6}$/.test(nick)) {
        nick = nick.slice(0, 4);
    }

    return nick.trim();
}
function getIcon(nick, size) {
    let imageSize = getImageSize(size);
    let returnObj = {
        icon_name: "default",
        icon_version: "1",
        icon_url: utility.DEFAULT_URL,
    };
    if (!nick) {
        return returnObj;
    }
    nick = formatNick(nick);
    Object.entries(nameMapping).every(([mode, paymentMode]) => {
        let flag = true;
        Object.keys(paymentMode).every((key) => {
            if (paymentMode[key].includes(nick)) {
                // snapmint exists under both "upi" and "cardless" with the same
                // key, but PAYMENT_MODE_MAPPING can only hold one folder per
                // key (last one wins), which always resolved to "cardless".
                // Use the category that actually matched for this key instead.
                let folder =
                    key === "snapmint" ? mode : utility.PAYMENT_MODE_MAPPING[key];
                returnObj = {
                    icon_name: key,
                    icon_version: "1",
                    icon_url: `${utility.IMAGE_URL}/${folder}/${utility.SIZE_MAPPING[imageSize]}/${key}.${utility.IMAGE_TYPE[imageSize]}`,
                };
                flag = false;
                return false;
            }
            return true;
        });
        return flag;
    });
    return returnObj;
}

export { getIcon };
