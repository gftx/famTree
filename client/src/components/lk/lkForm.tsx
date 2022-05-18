import {ChangeEvent, useState} from "react";
import {api} from "../../api";

function LkForm() {
    const [img, setImg] = useState<any>(null)

    const handleSubmit = async () => {
        const res = await api.postPerson(img)
        console.log('response',res)
    }

    return (
        <>
            <input
                type="file"
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