const columnNames = [
  'Уровень',
  'Наименование работ',
  'Основная з/п',
  'Оборудование',
  'Накладные расходы',
  'Сметная прибыль',
];

export default function MainSection() {
  return (
    <>
      <div className='main-section__names'>
        <div className='main-section__names__item'>
          <h1>Строительно-монтажные работы</h1>
        </div>
      </div>

      <section className='main-section__content'>
        <ul className='main-section__content__row main-section__content__row--names'>
          {columnNames.map(el => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
