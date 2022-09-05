import { getIcon } from "./getLogo.js";
function getIcons(nickArray, size) {
    let imageSize = "";
    if (["sm", "md", "lg", "svg"].includes(size)) {
        imageSize = size;
    } else {
        imageSize = "sm";
    }
    let returnArray = [];
    nickArray.forEach((element) => {
        returnArray.push(getIcon(element, imageSize));
    });
    return returnArray;
}

export { getIcons };
