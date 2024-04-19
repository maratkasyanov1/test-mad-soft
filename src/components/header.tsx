import { CountFn } from './timer';
export const HeaderTimer = () => {
  return (
    <>
      <button className='resetBtn' onClick={() => { window.sessionStorage.setItem("disabled", 'false'); window.location.reload(); }}>Начать заново</button>
      <div className='headerTimer'>
        <h2 className='h2Test'>Тестирование</h2>
        <p className='timer'><CountFn></CountFn> </p>
      </div>
    </>
  )
}