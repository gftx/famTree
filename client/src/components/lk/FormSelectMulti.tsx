import { CSSProperties } from 'react';
import { Controller } from 'react-hook-form';
import Select, { StylesConfig } from 'react-select';
import { ISelectValues } from '../../interfaces';
import { FormSelectProps } from '../../types';

const customControlStyles: CSSProperties = {
  borderColor: '#ededed'
};

const selectStyle: StylesConfig<ISelectValues, true> = {
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
        styles={selectStyle}
        className={className}
        placeholder={placeholder}
        name={name}
        isClearable={true}
        isMulti
        options={personsValues}
        value={personsValues.filter((option) => value?.includes(option.value))}
        onChange={(personsValues) =>
          // @ts-ignore
          onChange(personsValues?.map((option) => option.value))
        }
        onBlur={onBlur}
      />
    )}
  />
);

export { FormSelectMulti };
