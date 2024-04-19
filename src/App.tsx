import './App.css';
import { useState, useEffect } from 'react';
import { ProgressStatus } from './components/progreesstatus';
import { Questions } from './components/questions';
import { dataQue } from './data/questionsData';
function App() {
  const [status, setstatus] = useState(dataQue)
  const [currQue, SetCurrQue] = useState(0)
  const [res, SetRes] = useState(0)
  function handleClick(result: boolean) {
    if (result) SetRes((elem) => elem = elem + 1)
    if (currQue === 9) {alert(`ПРавильных ответов ${res} из 10`);window.location.reload()}
    if (currQue < 9) SetCurrQue((prev) => prev = prev + 1)
    if (status.slice().reverse().findIndex((elem) => elem.statusBool === true) !== 0 && status.slice().reverse().findIndex((elem) => elem.statusBool === true) !== -1) {
      let indx = 9 - status.slice().reverse().findIndex((elem) => elem.statusBool === true)
      let newstat = status.slice()
      newstat[indx + 1].statusBool = true
      setstatus(newstat)
    } else if (status.slice().reverse().findIndex((elem) => elem.statusBool === true) === -1) {
      let newstat = status.slice()
      newstat[0].statusBool = true
      setstatus(newstat)
    }
  }
  useEffect(() => { window.sessionStorage.setItem("res", String(res)) }, [res])


  return (
    <div className="App">
      <ProgressStatus currQue={currQue} status={status} />
      <Questions status={status[currQue]} handleClick={handleClick} />
    </div>
  );
}

export default App;
