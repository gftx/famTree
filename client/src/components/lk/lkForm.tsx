import { useEffect, useState } from 'react';
import { api } from '../../api';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { IPerson, ISelectValues, IUserSubmitForm } from '../../interfaces';
import { FormInput } from '../../views/input';

import { isEmpty } from '../../utils/isEmtyObj';
import { FormSelectMulti } from './FormSelectMulti';
import { FormSelect } from './FormSelect'

const validationSchema = Yup.object().shape({
	name: Yup.string().required('Имя обязательно'),
	surname: Yup.string().required('Фамилия обязательно'),
	birthdate: Yup.string().required('Дата рождения обязательно'),
});

function LkForm() {
	const [persons, setPersons] = useState<IPerson[]>([]);
	const [personsValues, setPersonsValues] = useState<ISelectValues[]>([]);
	const [message, setMessage] = useState('');

	const getPersons: () => void = async () => {
		const res = await api.getPersons();
		setPersons(res.data.data);
	};

	useEffect(() => {
		getPersons();
	}, []);

	useEffect(() => {
		if (!isEmpty(persons)) {
			let values: ISelectValues[] = [];
			for (const key in persons) {
				values.push({
					value: persons[key].id,
					label: persons[key].name,
				});
			}
			setPersonsValues(values);
		}
	}, [persons]);

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<IUserSubmitForm>({
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = async (data: IUserSubmitForm) => {
		const formData = new FormData();
		console.log('data', data);

		for (const key in data) {
			if (key === 'image') {
				// @ts-ignore
				formData.append(key, data[key][0]);
			} else {
				// @ts-ignore
				formData.append(key, data[key]);
			}
		}
		const res = await api.postPerson(data);
		setMessage(res?.data.message);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormInput
				label='Имя *'
				inputName='name'
				type='text'
				register={register}
				errors={errors}
			/>
			<FormInput
				label='Фамилия *'
				inputName='surname'
				type='text'
				register={register}
				errors={errors}
			/>
			<FormInput
				label='Дата рождения *'
				inputName='birthdate'
				type='text'
				register={register}
				errors={errors}
			/>
			<FormInput
				label='Аватар'
				inputName='image'
				type='file'
				register={register}
				errors={errors}
			/>
			<FormSelect
				control={control}
				personsValues={personsValues}
				placeholder='Папа'
				name='fatherID'
			/>
			<FormSelect
				control={control}
				personsValues={personsValues}
				placeholder='Мама'
				name='motherID'
			/>
			<FormSelectMulti
				control={control}
				personsValues={personsValues}
				placeholder='Братья'
				name='brothersIDs'
			/>
			<FormSelectMulti
				control={control}
				personsValues={personsValues}
				placeholder='Сестры'
				name='sistersIDs'
			/>
			<FormSelectMulti
				control={control}
				personsValues={personsValues}
				placeholder='Дети'
				name='childrenIds'
			/>
			<div className='form-group'>
				<button type='submit' className='btn btn-primary'>
					Добавить человека
				</button>
			</div>
			<div>{message}</div>
		</form>
	);
}

export { LkForm };
