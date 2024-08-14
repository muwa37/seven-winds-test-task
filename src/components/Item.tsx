import { BsClipboardDataFill } from 'react-icons/bs';
import { RiDeleteBin5Fill } from 'react-icons/ri';

import { useForm } from 'react-hook-form';
import { dataType, useTableContext } from '../context/TableContext';
import InputUseForm from './InputUseForm';

export default function Item({ item }: { item: dataType }) {
  const { updateRow, deleteRow, isOpenItem, setIsOpenItem } = useTableContext();
  const { register, handleSubmit, formState } = useForm<SubmitEvent>();
  const { errors } = formState;

  const onSubmit: SubmitHandler<SubmitEvent> = (data: DataType) => {
    const newRow = {
      ...item,
      rowName: data.workName,
      salary: +data.salary,
      supportCosts: +data.spendings,
      equipmentCosts: +data.equipment,
      estimatedProfit: +data.income,
    };

    updateRow(newRow);
  };

  return (
    <form className='main-area__content__row main-area__content__row--item' onSubmit={handleSubmit(onSubmit)}>
      <div className='main-area__list--icon'>
        {isOpenItem !== item ? (
          <BsClipboardDataFill className='main-area__icon' onClick={() => setIsOpenItem(item)} />
        ) : (
          <>
            <BsClipboardDataFill
              className='main-area__icon main-area__icon--add'
              onClick={() => setIsOpenItem(null)}
            />
            <RiDeleteBin5Fill
              className='main-area__icon main-area__icon--delete'
              onClick={() => {
                setIsOpenItem(null);
                deleteRow(item.id);
              }}
            />
          </>
        )}
      </div>

      {isOpenItem !== item ? (
        <>
          {' '}
          <div>{item.rowName}</div>
          <div>{item.salary}</div>
          <div>{item.equipmentCosts}</div>
          <div>{item.supportCosts}</div>
          <div>{item.estimatedProfit}</div>
        </>
      ) : (
        <>
          <button style={{ display: 'none' }}></button>

          <div className='relative'>
            <InputUseForm
              defaultValue={item.rowName}
              inputName='workName'
              inputType='text'
              placeHolder='Наименование'
              errors={errors}
              registerFunc={register}
              registerOptions={{ required: `Пожалуйста, заполните поле ↓` }}
            />
          </div>

          <div className='relative'>
            <InputUseForm
              defaultValue={item.salary}
              inputName='salary'
              inputType='number'
              placeHolder='З/п'
              errors={errors}
              registerFunc={register}
              registerOptions={{ required: `Пожалуйста, заполните поле ↓` }}
            />
          </div>

          <div className='relative'>
            <InputUseForm
              defaultValue={item.equipmentCosts}
              inputName='equipment'
              inputType='number'
              placeHolder='Оборудование'
              errors={errors}
              registerFunc={register}
              registerOptions={{ required: `Пожалуйста, заполните поле ↓` }}
            />
          </div>

          <div className='relative'>
            <InputUseForm
              defaultValue={item.supportCosts}
              inputName='spendings'
              inputType='number'
              placeHolder='Расходы'
              errors={errors}
              registerFunc={register}
              registerOptions={{ required: `Пожалуйста, заполните поле ↓` }}
            />
          </div>

          <div className='relative'>
            <InputUseForm
              defaultValue={item.estimatedProfit}
              inputName='income'
              inputType='number'
              placeHolder='Прибыль'
              errors={errors}
              registerFunc={register}
              registerOptions={{ required: `Пожалуйста, заполните поле ↓` }}
            />
          </div>
        </>
      )}
    </form>
  );
}
