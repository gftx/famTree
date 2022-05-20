import axios from "axios"

const MAIN_URL:string | undefined = process.env.REACT_APP_MAIN_URL

interface Values {
    firstName: string;
    image: any;
}
class Api {
    url: string | undefined

    constructor(url: string | undefined) {
        this.url = url
    }

    getPersons = async () => {
        return axios({
            method: 'GET',
            url: `${this.url}/persons`,
        });
    }

    postPerson = async (values: any) => {
        console.log('postPerson api', values)
        return axios({
            method: 'POST',
            url: `${this.url}/persons`,
            headers: {
                'Accept': 'multipart/form-data',
                'Content-Type': 'multipart/form-data',
            },
            data: {image: values},
        })
    }
}

const api = new Api(MAIN_URL)

export { api }