import { InputPropsType } from '../../types';

const FormInput = ({
	label,
	inputName,
	type,
	register,
	errors = {},
}: InputPropsType) => (
	<div className='form-group'>
		<label>{label}</label>
		<input type={type} {...register(inputName)} />
		{errors[`${inputName}`] && <div>{errors[`${inputName}`]?.message}</div>}
	</div>
);

export { FormInput };
