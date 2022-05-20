import {ChangeEvent, useState} from "react";
import {api} from "../../api";
import axios from "axios";

function LkForm() {
    const [img, setImg] = useState<any>(null)

    const handleSubmit = async () => {
        console.log('img',img)
        const formData = new FormData()
        formData.append('image', img)

        axios.post('http://localhost:5000/api/image', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            transformRequest: [function (data) {
                return data
            }],
            onUploadProgress: progressEvent => {
                let complete = (progressEvent.loaded / progressEvent.total * 100 | 0) + '%'
                console.log('complete: ', complete)
            }
        })
            .then((response) => {
                if (response.status === 200) {
                    console.log('success upload')
                }
            })


        // const res = await api.postPerson(formData)
        // console.log('response',res)
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