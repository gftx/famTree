import { useEffect, useState } from 'react';
import { api } from '../../api';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { IPerson, ISelectValues, IUserSubmitForm } from '../../interfaces';
import { FormInput } from '../../views/input';
import ru from 'date-fns/locale/ru';

import { isEmpty } from '../../utils/isEmtyObj';
import { FormSelectMulti } from './FormSelectMulti';
import { FormSelect } from './FormSelect';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import notification from '../../utils/notification';
import { click } from '../../images';
import('dayjs/locale/ru');

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Имя обязательно'),
  surname: Yup.string().required('Фамилия обязательно'),
  birthdate: Yup.string().required('Дата рождения обязательно')
});

function LkForm() {
  const [persons, setPersons] = useState<IPerson[]>([]);
  const [personsValues, setPersonsValues] = useState<ISelectValues[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPersons = async () => {
    setIsLoading(true);
    api
      .getPersons()
      .then((res) => {
        setPersons(res.data.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setIsLoading(false);
      });
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
          if (data[key][0]) {
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
        if (res) {
          notification(res?.data.message, false);
        } else {
          notification('', true);
        }
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
  }, [setValue, startDate]);

  if (isLoading) {
    return <>идет загрузка...</>;
  }

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
        dateFormat='dd/MM/yyyy'
        className='form_input form_input_datepicker'
        onChange={(date: Date) => setStartDate(date)}
        placeholderText='Дата рождения *'
        selected={startDate}
        locale={ru}
      />
      <div>
        <label className='form_input_avatar__label'>
          <input
            type='file'
            className='form_input_avatar__input'
            {...register('image')}
          />
          нажмите чтобы выбрать аватар
          <img className='form_input_avatar__picture' src={click} alt='' />
        </label>
      </div>
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
