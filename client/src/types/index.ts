import { ISelectValues } from '../interfaces';

export type InputPropsType = {
  label: string
  inputName: string
  type: string
  register: any
  errors?: any
  className?: string
}

export type SerializerProps = {
  id: number;
  name: string;
  surname: string;
  birthdate: string;
  image: string;
  father_id: string;
  mother_id: string;
  sisters: string[] | string;
  brothers: string[] | string;
  children: string[] | string;
}


export type FormSelectProps = {
  control: any
  personsValues: ISelectValues[]
  name: string
  placeholder: string
  className?: string
}