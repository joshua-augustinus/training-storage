import { ImageInfo } from "@src/types/sharedElementTypes"
import { Platform } from "react-native";
import RNFetchBlob from 'rn-fetch-blob'

/**
 * Singleton
 */
const localImages = {};

/**
 * Gets image if cached. 
 */
export const getImageIfCached = (info: ImageInfo) => {
    if (!info?.id) {
        return null;
    }
    const key = info.id.toString();

    if (key in localImages) {
        console.log("getImageByInfo", info);
        return localImages[key];
    }
    else {
        return null;
    }
}

export const isImageCached = (info: ImageInfo) => {
    if (!info?.id) {
        return false;
    } else {
        const key = info.id.toString();
        return key in localImages
    }
}

export const getImageByInfo = (info: ImageInfo, callback?) => {
    if (!info) {
        return null;
    }
    const key = info.id.toString();

    if (key in localImages) {
        console.log("getImageByInfo", info);
        return localImages[key];
    } else if (callback) {
        console.log("getImageByInfo Couldn't find image - will use callback");
        preloadImage(info, callback);
        return null;
    } else {
        console.log("getImageByInfo Couldn't find image - will use uri", key);
        return { uri: info.url }

    }

}

export const preloadImages = (images: ImageInfo[]) => {
    for (let i = 0; i < images.length; i++) {
        preloadImage(images[i])
    }

}


/**
 * 
 * @param images 
 * @param callback function that takes image source (optional) 
 */
export const preloadImage = (images: ImageInfo, callback?) => {
    const shouldCache = true;
    //Init
    return RNFetchBlob
        .config({
            // add this option that makes response data to be stored as a file,
            // this is much more performant.
            fileCache: shouldCache,
            // by adding this option, the temp files will have a file extension
            appendExt: 'jpg'
        })
        .fetch('GET', images.url, {
            //some headers ..
        })
        .then((res) => {
            let source;
            if (Platform.OS === 'android') {
                source = { uri: 'file://' + res.path() }

            } else {
                source = { uri: '' + res.path() }

            }
            const key = images.id.toString();
            localImages[key] = source;

            if (callback) {
                callback(source);
            }
        })
}

