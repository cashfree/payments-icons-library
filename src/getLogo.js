import { nameMapping } from "./nameMapping.js";
import utility from "./utility.js";
import { getImageSize } from "./helpers.js";

function getLogo(nick, size) {
    let imageSize = getImageSize(size);
    let returnObj = {
        logo_name: "default",
        logo_version: "1",
        logo_url: utility.DEFAULT_URL,
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
                    logo_name: key,
                    logo_version: "1",
                    logo_url: `${utility.IMAGE_URL}/${utility.PAYMENT_MODE_MAPPING[key]}/${utility.SIZE_MAPPING[imageSize]}/${key}.${utility.IMAGE_TYPE[imageSize]}`,
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

export { getLogo };
