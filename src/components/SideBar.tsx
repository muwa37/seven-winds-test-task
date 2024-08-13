import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { SiTask } from 'react-icons/si';

const testData = [
  'Dummy',
  'Data',
  'По проекту',
  'Объекты',
  'РД',
  'МТО',
  'СМР',
  'График',
  'МиМ',
  'Рабочие',
  'Капвложения',
  'Бюджет',
  'Финансирование',
  'Панорамы',
  'Камеры',
  'Получения',
  'Контрагенты',
];

export default function SideBar() {
  const [activeEl, setActiveEl] = useState('СМР');

  return (
    <>
      <div className='side-bar__name'>
        <div>
          <h1>Название проекта</h1>
          <h3>Аббревиатура</h3>
        </div>

        <IoIosArrowDown className='side-bar__name--icon' />
      </div>

      <aside className='side-bar__container'>
        <ul className='side-bar__list'>
          {testData.map(el => (
            <li
              key={el}
              className={`${activeEl === el ? 'side-bar__item--active' : ''} side-bar__item`}
              onClick={() => setActiveEl(el)}
            >
              <SiTask className='side-bar__item--icon' />

              {el}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
