import Countdown from 'react-countdown';
const Completionist = () => {
  window.sessionStorage.setItem("disabled", "true");
  alert('Время вышло')
  return (<span>Время вышло!</span>);
}
const renderer = ({ minutes, seconds, completed }: {minutes:number, seconds:number, completed:boolean }) => {

  if (completed) {
    return <Completionist />;
  } else {
    return (
      <span>
        {minutes}:{seconds}
      </span>
    );
  }
};

export const CountFn = () => { return <Countdown renderer={renderer} date={Date.now() + 1200000}></Countdown> } 