import { nameMapping } from "./nameMapping.js";
import utility from "./utility.js";
import { getImageSize } from "./helpers.js";

function getModesIcons(mode, size) {
    let imageSize = getImageSize(size);
    let returnArray = [];
    if (Object.keys(nameMapping[mode])) {
        Object.keys(nameMapping[mode]).forEach((key) => {
            returnArray.push({
                icon_name: key,
                icon_version: "1",
                icon_url: `${utility.IMAGE_URL}/${utility.PAYMENT_MODE_MAPPING[key]}/${utility.SIZE_MAPPING[imageSize]}/${key}.${utility.IMAGE_TYPE[imageSize]}`,
            });
        });
    }
    return returnArray;
}

export { getModesIcons };
