import {IProfile} from "../interfaces";
import {MAIN_URL} from "./index";

export const serializer = (data:IProfile) => {
    if (data.image) {
        data.image = `${MAIN_URL}${data.image}`
    }
}