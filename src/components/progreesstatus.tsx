interface propsStat {
  statusBool?: boolean,
  que: string,
  answers: string[]
}

export function ProgressStatus(props: {currQue:number,status:propsStat[]}) {
  console.log(props)
  return (
    <div className="progressStatus">
      {props.status.map((elem: propsStat, indx: number) => <div key={indx}  style={{ backgroundColor: elem.statusBool ? 'red' : 'white'}} className="progressStatusElement"></div>)}
    </div>
  )

}