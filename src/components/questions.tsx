import { useEffect, useState } from 'react';
interface PropsQue {
  handleClick: Function,
  status: {
    status?: boolean,
    que: string,
    answers: string[],
    true: string
  }
}
export const Questions = (props: PropsQue) => {
  console.log(props)
  const [disabled,] = useState(window.sessionStorage.getItem("disabled") === 'true')
  const [selectedValue, setSelectedValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Выбранное значение:', selectedValue === props.status.true);
    if (selectedValue !== '') {
      props.handleClick(selectedValue === props.status.true)
      setSelectedValue('')
    }

  };

  useEffect(() => { console.log(window.sessionStorage.getItem("disabled")) }, [])
  return (

    <div className='queSection'>
      <p className='questionPharagraph'>{props.status.que}</p>

      <form className='formS' onSubmit={handleSubmit}>
        {props.status.answers.map((value: string, index: number) => (
          <div className='LabelInput' key={index}>
            <input
              type="radio"
              id={value}
              disabled={disabled}
              name="radioGroup"
              value={value}
              checked={selectedValue === value}
              onChange={handleChange}
            />
            <label className='textValueInput' htmlFor={value}>{value}</label>
          </div>
        ))}
        <button className='submitBtn' type="submit">Отправить</button>
      </form>
    </div>

  )
}