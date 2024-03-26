import { nameMapping } from "./nameMapping.js";
import utility from "./utility.js";
import { getImageSize } from "./helpers.js";

function formatNick(nick) {
    nick = nick.toLowerCase();
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
    Object.values(nameMapping).every((paymentMode) => {
        let flag = true;
        Object.keys(paymentMode).every((key) => {
            if (paymentMode[key].includes(nick)) {
                returnObj = {
                    icon_name: key,
                    icon_version: "1",
                    icon_url: `${utility.IMAGE_URL}/${utility.PAYMENT_MODE_MAPPING[key]}/${utility.SIZE_MAPPING[imageSize]}/${key}.${utility.IMAGE_TYPE[imageSize]}`,
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
