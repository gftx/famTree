import { useEffect, useState } from "react";
import { api } from "../../api";
import axios from "axios";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { UserSubmitForm } from "../../interfaces";

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Имя обязательно'),
    surname: Yup.string().required('Фамилия обязательно'),
    birthdate: Yup.string().required('Дата рождения обязательно')
});

function LkForm() {
    const [persons, setPersons] = useState([])
    const [message, setMessage] = useState('')

    const getPersons:() => void = async () => {
        const res = await api.getPersons()
        setPersons(res.data.data)
    }

    useEffect(() => {
        getPersons()
    },[])

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = async (data: UserSubmitForm) => {
        const formData = new FormData()

        for (const key in data) {
            if (key === 'image') {
                // @ts-ignore
                formData.append(key, data[key][0])
            } else {
                // @ts-ignore
                formData.append(key, data[key])
            }
        }
        const res = await api.postPerson(formData)
        setMessage(res?.data.message)
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Имя *</label>
                    <input
                        type="text"
                        {...register('name')}
                    />
                    <div className="invalid-feedback">{errors.name?.message}</div>
                </div>
                <div className="form-group">
                    <label>Фамилия *</label>
                    <input
                        type="text"
                        {...register('surname')}
                    />
                    <div className="invalid-feedback">{errors.surname?.message}</div>
                </div>
                <div className="form-group">
                    <label>Дата рождения *</label>
                    <input
                        type="text"
                        {...register('birthdate')}
                    />
                    <div className="invalid-feedback">{errors.surname?.message}</div>
                </div>
                <div>
                    <label>Аватар</label>
                    <input
                        type='file'
                        {...register('image')}

                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Добавить человека
                    </button>
                    <button
                        type="button"
                        onClick={() => reset()}
                        className="btn btn-warning float-right"
                    >
                        Сбросить
                    </button>
                </div>
                <div>{message}</div>
            </form>
        </>
    );
}

export {LkForm}