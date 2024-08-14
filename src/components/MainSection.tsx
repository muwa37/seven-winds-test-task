import { useTableContext } from '../context/TableContext';
import { ITEMS_PER_PAGE } from '../utils/constants';

import AddForm from './AddForm';
import Item from './Item';
import Pagination from './Pagination';
import Spinner from './Spinner';

const columnNames = [
  'Уровень',
  'Наименование работ',
  'Основная з/п',
  'Оборудование',
  'Накладные расходы',
  'Сметная прибыль',
];

export default function MainSection() {
  const { isPending, data, activePage } = useTableContext();

  const from = (activePage - 1) * ITEMS_PER_PAGE;
  const to = from + ITEMS_PER_PAGE - 1;

  return (
    <>
      <div className='main-area__names'>
        <div className='main-area__names__item'>
          <h1>Строительно-монтажные работы</h1>
        </div>
      </div>

      <section className='main-area__content'>
        <div>
          <ul className='main-area__content__row main-area__content__row--names'>
            {columnNames.map(el => (
              <li key={el}>{el}</li>
            ))}
          </ul>

          {isPending ? (
            <Spinner />
          ) : (
            <>
              <AddForm />

              {data &&
                !isPending &&
                data.length !== 0 &&
                data.slice(from, to).map(el => <Item key={el.id} item={el} />)}
            </>
          )}
        </div>

        {data && !isPending && data.length !== 0 && <Pagination count={data?.length} />}
      </section>
    </>
  );
}
