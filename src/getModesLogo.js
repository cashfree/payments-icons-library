import { nameMapping } from "./nameMapping.js";
import utility from "./utility.js";
import { getImageSize } from "./helpers.js";

function getModesIcons(mode, size) {
    let imageSize = getImageSize(size);
    let returnArray = [];
    if (Object.keys(nameMapping[mode])) {
        Object.keys(nameMapping[mode]).forEach((key) => {
            // snapmint exists under both "upi" and "cardless" with the same
            // key, but PAYMENT_MODE_MAPPING can only hold one folder per key
            // (last one wins), which always resolved to "cardless". Use the
            // requested mode directly for this key instead.
            let folder =
                key === "snapmint" ? mode : utility.PAYMENT_MODE_MAPPING[key];
            returnArray.push({
                icon_name: key,
                icon_version: "1",
                icon_url: `${utility.IMAGE_URL}/${folder}/${utility.SIZE_MAPPING[imageSize]}/${key}.${utility.IMAGE_TYPE[imageSize]}`,
            });
        });
    }
    return returnArray;
}

export { getModesIcons };
