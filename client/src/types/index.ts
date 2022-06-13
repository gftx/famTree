import { ISelectValues } from "../interfaces"

export type InputPropsType = {
    label: string
    inputName: string 
    type: string
    register: any
    errors?: any
} 

export type FormSelectProps = {
    control: any
    personsValues: ISelectValues[]
    name: string
    placeholder: string
}