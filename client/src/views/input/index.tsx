import { InputPropsType } from '../../types';
import './index.scss'

const FormInput = ({
	label,
	inputName,
	type,
	register,
	errors = {},
}: InputPropsType) => (
	<div className='form-group'>
		<label>{label}</label>
		<input type={type} {...register(inputName)}  className='input'/>
		{errors[`${inputName}`] && <div>{errors[`${inputName}`]?.message}</div>}
	</div>
);

export { FormInput };
