type InputUseFormProps = {
  type?: 'input' | 'textarea';
  inputName: string;
  placeHolder?: string;
  errors: object;
  registerOptions?: object;
  registerFunc: unknown;
  inputType: string;
  label?: string;
  defaultValue?: string | number;
  inputClassName?: string;
  value?: string | number;
  setValue?: <T>(value: T) => void;
};

export default function InputUseForm({
  type = 'input',
  inputName,
  placeHolder,
  errors,
  registerOptions,
  registerFunc,
  inputType,
  label,
  defaultValue,
  inputClassName,
  value,
  setValue,
}: InputUseFormProps) {
  const message = errors[inputName]?.message;
  message;

  if (type !== 'textarea')
    return (
      <div className=''>
        <div className={``}>
          <input
            value={value}
            onChange={setValue}
            defaultValue={defaultValue}
            className={`${inputClassName} ${message ? 'main-area__input--required' : ''} main-area__input`}
            placeholder={placeHolder}
            type={inputType}
            id={inputName}
            {...registerFunc(inputName, registerOptions)}
          />
        </div>

        {label && (
          <label htmlFor={inputName} className=''>
            {label}
          </label>
        )}
      </div>
    );

  return <h1 className='text-3xl font-bold'>You specified the wrong type</h1>;
}
