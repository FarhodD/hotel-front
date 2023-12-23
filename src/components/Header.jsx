import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="header py-6 shadow-md font-montserrat">
      <div className="header__inner flex justify-between items-center container mx-auto">
        <a href='/' className="logo text-2xl font-black">LOGO</a>
        <nav className="nav">
          <ul className="menu flex gap-10">
            <li className="menu__item">
              <a href="/" className="menu__link text-mainColor font-normal duration-500 hover:text-secondaryColor">Главная</a>
            </li>
            <li className="menu__item">
              <a href="/" className="menu__link text-mainColor font-normal duration-500 hover:text-secondaryColor">Об отеле</a>
            </li>
            <li className="menu__item">
              <a href="/" className="menu__link text-mainColor font-normal duration-500 hover:text-secondaryColor">Преимущества</a>
            </li>
            <li className="menu__item">
              <a href="/" className="menu__link text-mainColor font-normal duration-500 hover:text-secondaryColor">Контакты</a>
            </li>
          </ul>
        </nav>
        <Navbar />
      </div>
    </header>
  )
}

export default Header