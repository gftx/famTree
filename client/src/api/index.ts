import axios from "axios"

const MAIN_URL:string | undefined = process.env.REACT_APP_MAIN_URL

class Api {
    url: string | undefined

    constructor(url: string | undefined) {
        this.url = url
    }

    getPersons = async () => {
        const res = await axios({
            method: 'GET',
            url: `${this.url}/persons`,
        })
    
        return res
    }
}

const api = new Api(MAIN_URL)

export { api }