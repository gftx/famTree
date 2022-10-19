import { CSSProperties } from 'react';
import { Controller } from 'react-hook-form';
import Select, { StylesConfig } from 'react-select';
import { ISelectValues } from '../../interfaces';
import { FormSelectProps } from '../../types';

const customControlStyles: CSSProperties = {
  borderColor: '#ededed'
};

const selectStyle: StylesConfig<ISelectValues, false> = {
  control: (provided, state) => {
    // provided has CSSObject type
    // state has ControlProps type

    // return type is CSSObject which means this line will throw error if uncommented
    // return false;

    return {
      ...provided,
      ...customControlStyles
    };
  }
};

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
        styles={selectStyle}
        className={className}
        placeholder={placeholder}
        options={personsValues}
        value={personsValues.find((c) => c.value === value)}
        onChange={(val) => onChange(val?.value)}
        isClearable
      />
    )}
  />
);

export { FormSelect };
