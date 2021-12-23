import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { RiUser3Line } from 'react-icons/ri';
import { RiKeyLine } from 'react-icons/ri';
import { Checkbox } from 'antd';
import InputField from 'components/FormControl/InputField';

const schema = yup
  .object({
    email: yup.string().required().email('Invalid email'),
    password: yup.string().required(),
  })
  .required();

function LoginForm(props) {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('datda', data)
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(data);
    }
  };

  return (
    <div className='login'>
      <form onSubmit={form.handleSubmit(onSubmit)} className='login-form'>
        <InputField placeholder='Email' name='email' label='Email' form={form} prefix={<RiUser3Line />} />
        <InputField
          placeholder='Password'
          name='password'
          label='Password'
          form={form}
          type='password'
          prefix={<RiKeyLine />}
        />
        <div className='login-text'>
          <div className='login-text__remember'>
            <Checkbox> Remember me</Checkbox>
          </div>
          <div className='login-text__forgot'>Forgot your Password?</div>
        </div>
        <button className='login-form__btn' onClick={form.handleSubmit(onSubmit)}>
          Login
        </button>
        <div className='login-text__signup'>Free Signup</div>
      </form>
    </div>
  );
}

export default LoginForm;
