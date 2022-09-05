import { nameMapping } from "./nameMapping.js";
import utility from "./utility.js";
import { getImageSize } from "./helpers.js";

function getModesLogos(mode, size) {
    let imageSize = getImageSize(size);
    let returnArray = [];
    if (Object.keys(nameMapping[mode])) {
        Object.keys(nameMapping[mode]).forEach((key) => {
            returnArray.push({
                logo_name: key,
                logo_version: "1",
                logo_url: `${utility.IMAGE_URL}/${utility.PAYMENT_MODE_MAPPING[key]}/${utility.SIZE_MAPPING[imageSize]}/${key}.${utility.IMAGE_TYPE[imageSize]}`,
            });
        });
    }
    return returnArray;
}

export { getModesLogos };
