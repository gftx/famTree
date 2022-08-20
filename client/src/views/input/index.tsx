import { InputPropsType } from '../../types';

const FormInput = ({
	label,
	inputName,
	type,
	register,
	errors = {},
	className
}: InputPropsType) => (
	<div>
		<input type={type} {...register(inputName)}  className={className} placeholder={label}/>
		{errors[`${inputName}`] && <div>{errors[`${inputName}`]?.message}</div>}
	</div>
);

export { FormInput };
