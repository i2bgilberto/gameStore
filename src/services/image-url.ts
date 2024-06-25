import noImage from "../assets/no-image.webp";

const getCroppedImageUrl = (imageUrl: string) => {
    if (!imageUrl) {
        return noImage;
    }   
    const target = "media/";
    const index = imageUrl.indexOf(target) + target.length;
    return imageUrl.slice(0, index) + "crop/600/400/" + imageUrl.slice(index);

};

export default getCroppedImageUrl; 