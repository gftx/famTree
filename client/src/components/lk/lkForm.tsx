import {ChangeEvent, useState} from "react";
import {api} from "../../api";
import axios from "axios";

function LkForm() {
    const [img, setImg] = useState<any>(null)

    const handleSubmit = async () => {
        const formData = new FormData()
        formData.append('image', img)
        formData.append('name','Anton')
        formData.append('surname', 'Ivanov')
        formData.append('birthdate', '25.05.200')
        const res = await api.postPerson(formData)
        console.log('response',res)
    }

    return (
        <>
            <input
                type="file"
                name='image'
                onChange={(event:ChangeEvent) => {
                    //@ts-ignore
                    setImg(event.target.files[0])
                }}
            />
            <button onClick={handleSubmit}>submit</button>
        </>
    );
}

export {LkForm}