import { Controller } from 'react-hook-form';
import Select from 'react-select';
import { FormSelectProps } from '../../types';

const FormSelectMulti = ({
	control,
	personsValues,
	name,
	placeholder,
	className
}: FormSelectProps) => (
	<Controller
		name={name}
		control={control}
		render={({ field: { value, onChange, onBlur } }) => (
			<Select
				className={className}
				placeholder={placeholder}
				name={name}
				isClearable={true}
				isMulti
				options={personsValues}
				value={personsValues.filter(option => value?.includes(option.value))}
				onChange={personsValues =>
					// @ts-ignore
					onChange(personsValues?.map(option => option.value))
				}
				onBlur={onBlur}
			/>
		)}
	/>
);

export { FormSelectMulti };
