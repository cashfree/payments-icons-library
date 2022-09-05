import { nameMapping } from "./nameMapping.js";
import utility from "./utility.js";
import { getImageSize } from "./helpers.js";

function getIcon(nick, size) {
    let imageSize = getImageSize(size);
    let returnObj = {
        icon_name: "default",
        icon_version: "1",
        icon_url: utility.DEFAULT_URL,
    };
    if(!nick) {
        return returnObj;
    }
    nick = nick.toLowerCase();
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
