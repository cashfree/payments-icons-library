import { getLogo } from "./getLogo.js";
function getLogos(nickArray, size) {
    let imageSize = "";
    if (["sm", "md", "lg", "svg"].includes(size)) {
        imageSize = size;
    } else {
        imageSize = "sm";
    }
    let returnArray = [];
    nickArray.forEach((element) => {
        returnArray.push(getLogo(element, imageSize));
    });
    return returnArray;
}

export { getLogos };
