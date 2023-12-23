import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../actions/user';
import Input from '../utils/Input';

const Login = () => {
  const [tel, setTel] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  return (
    <div className='pt-14'>
      <form className='w-[450px] bg-[#D9D9D980] shadow-lg mx-auto p-7'>
        <h2 className='text-center text-2xl font-bold text-secondaryColor mb-10'>Вход</h2>
        <div className='mb-5'>
          <label className='inline-block mb-2 text-xl font-medium text-secondaryColor' htmlFor="tel">Номер телефона</label>
          <Input value={tel} setValue={setTel} type='tel' placeholder='Номер телефона' id='tel' />
        </div>
        <div className='mb-10'>
          <label className='inline-block mb-2 text-xl font-medium text-secondaryColor' htmlFor="password">Пароль</label>
          <Input value={password} setValue={setPassword} type='password' placeholder='Введите пароль' id='password' />
        </div>
        <div className="btn__container flex justify-center mb-4">
          <button onClick={(e) => {
            e.preventDefault();
            dispatch(login(tel, password))
          }}
            className='bg-white w-52 p-3 font-medium duration-500 text-secondaryColor border border-secondaryColor rounded-lg hover:text-white hover:bg-secondaryColor'>Войти</button>
        </div>
        <div className='text-center text-mainColor font-medium'>Если нет аккаунта можете тут<Link className='text-secondaryColor p-2 underline ' to={'/registration'}>Зарегистрироваться</Link></div>
      </form>
    </div>
  )
}

export default Login