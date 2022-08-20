import { Controller } from 'react-hook-form';
import Select from 'react-select';
import { FormSelectProps } from '../../types';

const FormSelect = ({
	control,
	personsValues,
	name,
	placeholder,
	className
}: FormSelectProps) => (
	<Controller
		name={name}
		control={control}
        render={({ field: { onChange, value } }) => (
            <Select
								className={className}
                placeholder={placeholder}
                options={personsValues}
                value={personsValues.find(c => c.value === value)}
                onChange={val => onChange(val?.value)}
            />
        )}
		
	/>
);

export { FormSelect };
