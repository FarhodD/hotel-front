import React, { useState } from 'react'
import { registration } from '../actions/user';
import Input from '../utils/Input'

const Registration = () => {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='pt-14'>
      <form className='w-[450px] bg-[#D9D9D980] shadow-lg mx-auto p-7'>
        <h2 className='text-center text-2xl font-bold text-secondaryColor mb-10'>Регистрация</h2>
        <div className='mb-5'>
          <label className='inline-block mb-2 text-xl font-medium text-secondaryColor' htmlFor="name">Имя</label>
          <Input value={name} setValue={setName} type='text' placeholder='Введите имя' id='name' />
        </div>
        <div className='mb-5'>
          <label className='inline-block mb-2 text-xl font-medium text-secondaryColor' htmlFor="tel">Номер телефона</label>
          <Input value={tel} setValue={setTel} type='text' placeholder='Номер телефона' id='tel' />
        </div>
        <div className='mb-10'>
          <label className='inline-block mb-2 text-xl font-medium text-secondaryColor' htmlFor="password">Пароль</label>
          <Input value={password} setValue={setPassword} type='password' placeholder='Введите пароль' id='password' />
        </div>

        <div className="btn__container flex justify-center">
          <button onClick={(e) => {
            e.preventDefault();
            registration(name, tel, password)
          }}
            className='bg-white w-52 p-3 font-medium duration-500 text-secondaryColor border border-secondaryColor rounded-lg hover:text-white hover:bg-secondaryColor'>Зарегистрироваться</button>
        </div>
      </form>
    </div>
  )
}

export default Registration