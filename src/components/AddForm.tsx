import { SubmitHandler, useForm } from 'react-hook-form';

import { useTableContext } from '../contexts/TableContext';
import InputUseForm from './InputUseForm';

type DataType = {
  workName: string;
  salary: string;
  income: string;
  equipment: string;
  spendings: string;
};

export default function Form() {
  const { addNewRow } = useTableContext();
  const { register, handleSubmit, formState } = useForm<SubmitEvent>();
  const { errors } = formState;

  const onSubmit: SubmitHandler<SubmitEvent> = (data: DataType) => {
    const newRow = {
      id: Math.random(),
      rowName: data.workName,
      salary: +data.salary,
      supportCosts: +data.spendings,
      equipmentCosts: +data.equipment,
      estimatedProfit: +data.income,
      total: 0,
      mimExploitation: 0,
      machineOperatorSalary: 0,
      materials: 0,
      mainCosts: 0,
      overheads: 0,
      child: [],
    };

    addNewRow(newRow);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='main-area__content__row main-area__content__row--item'>
      <button style={{ display: 'none' }}></button>

      <div className='main-area__icon'></div>

      <div className='relative'>
        <InputUseForm
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
          inputName='income'
          inputType='number'
          placeHolder='Прибыль'
          errors={errors}
          registerFunc={register}
          registerOptions={{ required: `Пожалуйста, заполните поле ↓` }}
        />
      </div>
    </form>
  );
}
