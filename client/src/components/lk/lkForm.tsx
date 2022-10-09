import { useEffect, useState } from 'react';
import { api } from '../../api';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { IPerson, ISelectValues, IUserSubmitForm } from '../../interfaces';
import { FormInput } from '../../views/input';

import { isEmpty } from '../../utils/isEmtyObj';
import { FormSelectMulti } from './FormSelectMulti';
import { FormSelect } from './FormSelect';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import notification from '../../utils/notification';
import('dayjs/locale/ru');

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Имя обязательно'),
  surname: Yup.string().required('Фамилия обязательно'),
  birthdate: Yup.string().required('Дата рождения обязательно')
});

function LkForm() {
  const [persons, setPersons] = useState<IPerson[]>([]);
  const [personsValues, setPersonsValues] = useState<ISelectValues[]>([]);

  const getPersons = async () => {
    const res = await api.getPersons();
    setPersons(res.data.data);
  };

  useEffect(() => {
    getPersons();
  }, []);

  useEffect(() => {
    if (!isEmpty(persons)) {
      const values: ISelectValues[] = [];
      for (const key in persons) {
        values.push({
          value: persons[key].id,
          label: persons[key].name
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
    setValue
  } = useForm<IUserSubmitForm>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = async (data: IUserSubmitForm) => {
    console.log(data);
    const formData = new FormData();

    if (Array.isArray(data.brothers)) {
      data.brothers = data.brothers.join(',');
    }
    if (Array.isArray(data.sisters)) {
      data.sisters = data.sisters.join(',');
    }
    if (Array.isArray(data.children)) {
      data.children = data.children.join(',');
    }

    for (const key in data) {
      // @ts-ignore
      if (data[key] !== undefined) {
        if (key === 'image') {
          // @ts-ignore
          if (data[key][0] !== undefined) {
            // @ts-ignore
            formData.append(key, data[key][0]);
          }
        } else {
          // @ts-ignore
          formData.append(key, data[key]);
        }
      }
    }
    api
      .postPerson(formData)
      .then((res) => {
        notification(res?.data.message, false);
        getPersons();
      })
      .catch((err) => console.error(err));
  };

  const [startDate, setStartDate] = useState<Date | undefined>();

  useEffect(() => {
    if (startDate)
      setValue(
        'birthdate',
        dayjs(startDate).locale('ru').format('DD MMMM YYYY')
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label='Имя *'
        inputName='name'
        type='text'
        register={register}
        errors={errors}
        className='form_input form_input_text'
      />
      <FormInput
        label='Фамилия *'
        inputName='surname'
        type='text'
        register={register}
        errors={errors}
        className='form_input form_input_text'
      />
      <ReactDatePicker
        className='form_input form_input_datepicker'
        onChange={(date: Date) => setStartDate(date)}
        selected={startDate}
        placeholderText='Дата рождения'
        value={
          startDate && dayjs(startDate).locale('ru').format('DD MMMM YYYY')
        }
      />
      <FormInput
        label='Аватар'
        inputName='image'
        type='file'
        register={register}
        errors={errors}
        className='form_input form_input_image'
      />
      <FormSelect
        control={control}
        personsValues={personsValues}
        placeholder='Папа'
        name='father_id'
        className='form_input'
      />
      <FormSelect
        control={control}
        personsValues={personsValues}
        placeholder='Мама'
        name='mother_id'
        className='form_input'
      />
      <FormSelectMulti
        control={control}
        personsValues={personsValues}
        placeholder='Братья'
        name='brothers'
        className='form_input'
      />
      <FormSelectMulti
        control={control}
        personsValues={personsValues}
        placeholder='Сестры'
        name='sisters'
        className='form_input'
      />
      <FormSelectMulti
        control={control}
        personsValues={personsValues}
        placeholder='Дети'
        name='children'
        className='form_input'
      />
      <div className='form-group'>
        <button type='submit' className='form-group__btn'>
          Добавить человека
        </button>
      </div>
    </form>
  );
}

export { LkForm };
