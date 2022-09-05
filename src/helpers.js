export function getImageSize(size) {
    let imageSize;
    if (["sm", "md", "lg", "svg"].includes(size)) {
        imageSize = size;
    } else {
        imageSize = "sm";
    }
    return imageSize;
}