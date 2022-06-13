import {IPerson} from "../interfaces";
import {MAIN_URL} from "./index";

export const serializer = (data:IPerson) => {
    console.log(data.image, typeof data.image)
    if (data.image !== 'undefined') {
        data.image = `${MAIN_URL}${data.image}`
    } else {
        data.image = `${MAIN_URL}uploads/no-photo-available.png`
    }
}