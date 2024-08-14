import { useState } from 'react';
import { IoIosShareAlt } from 'react-icons/io';
import { TbGridDots } from 'react-icons/tb';

type Icon = {
  icon: JSX.Element;
  name: string;
  rotate?: { transform: string };
};

const icons: Icon[] = [
  { icon: <TbGridDots />, name: 'TbGridDots' },
  { icon: <IoIosShareAlt />, name: 'IoIosShareAlt', rotate: { transform: 'rotateY(180deg)' } },
];

const texts = ['Просмотр', 'Управление'];

export default function Header() {
  const [activeEl, setActiveEl] = useState(texts[0]);

  return (
    <nav className='nav'>
      <ul className='nav__list'>
        {icons.map(icon => (
          <li key={icon.name} style={icon.rotate} className='nav__icon nav__item'>
            {icon.icon}
          </li>
        ))}

        {texts.map((text, i) => (
          <li
            key={text}
            style={i === 0 ? { marginLeft: '1.6rem' } : {}}
            className={`${activeEl === text ? 'nav__item--active' : ''} nav__text nav__item`}
            onClick={() => setActiveEl(text)}
          >
            {text}
          </li>
        ))}
      </ul>
    </nav>
  );
}
