interface dataQueType{
  statusBool?:boolean,
  status?: boolean,
  que: string,
  answers: string[],
  true: string
}
export const dataQue:dataQueType[] =[
  { statusBool: false, que: 'Что такое HTML?', answers: ['Hyperlinks and Text Markup Language', 'Hyper Text Markup Language', 'High Tech Modern Language'], true: 'Hyper Text Markup Language' },
  { status: false, que: 'Какая функция JavaScript используется для добавления нового элемента в HTML-документ?', answers: ['appendChild()', 'addElement()', 'createElement()'], true: 'createElement()' },
  { status: false, que: 'Какой CSS-свойство используется для изменения цвета текста?', answers: ['text-color', 'font-color', 'color'], true: 'color' },
  { status: false, que: 'Какой селектор CSS будет применять стили ко всем элементам <p> с классом "example"?', answers: ['p.example', '.example p', 'p .example'], true: 'p.example' },
  { status: false, que: 'Какой метод используется в React для обновления состояния компонента?', answers: ['this.updateState()', 'this.changeState()', 'this.setState()'], true: 'this.setState()' },
  { status: false, que: 'Какой хук React используется для выполнения побочных эффектов в функциональном компоненте?', answers: ['useEffectHook()', 'useEffect()', 'useState()'], true: 'useEffect()' },
  { status: false, que: 'Какое свойство HTML-элемента позволяет определить пользовательские данные?', answers: ['custom-data', 'data-*', 'user-data'], true: 'data-*' },
  { status: false, que: 'Какой метод JavaScript используется для отправки запросов на сервер без перезагрузки страницы?', answers: ['request()', 'fetch()', 'send()'], true: 'fetch()' },
  { status: false, que: 'Какой атрибут HTML используется для указания ссылки на изображение?', answers: ['href', 'link', 'src'], true: 'src' },
  { status: false, que: 'Какой метод JavaScript используется для удаления элемента из HTML-документа?', answers: ['removeElement()', 'remove()', 'delete()'], true: 'remove()' }]