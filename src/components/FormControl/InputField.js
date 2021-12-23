import { Input } from 'antd';
import React from 'react';
import { Controller } from 'react-hook-form';

function InputField(props) {
  const { form, name, disable, ...rest } = props;
  const { control } = form;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value, name }, formState: { errors } }) => (
        <div className='input-field'>
          <Input
            {...rest}
            size='large'
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            value={value}
            disabled={disable}
          />
          <p style={{ color: 'red', margin: '10px 0px' }} >{errors[name]?.message}</p>
        </div>
      )}
    ></Controller>
  );
}

export default InputField;
