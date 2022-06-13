import {IPerson} from "../interfaces";
import {MAIN_URL} from "./index";

export const serializer = (data:IPerson) => {
    if (data.image) {
        data.image = `${MAIN_URL}${data.image}`
    }
}