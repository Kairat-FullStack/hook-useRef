import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [arrayIndex, setArrayIndex] = useState(0)
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState(
    {
      first: '',
      second: '',
      third: ''
    }
  )

  const inputEl = useRef(null)

  useEffect(() => {
    inputEl.current[arrayIndex].focus()
  }, [inputEl, arrayIndex])

  const inputFocus = (e) => {
    e.preventDefault()
    if (arrayIndex === 2) {
      setVisible(true)
    } else if (!inputEl.current[arrayIndex].value) {
      inputEl.current[arrayIndex].focus()
    } else if (inputEl.current[arrayIndex].value) {
      setArrayIndex(arrayIndex + 1)
    }
  }

  const changeState = (e, props) => {
    setValue({ ...value, [props]: e.target.value })
    // console.log(value);
  }

  return (
    <div className="App">
      <form className='App__inputs' ref={inputEl} onSubmit={inputFocus}>
        <input placeholder='Поле ввода 1' type="text" onChange={(e) => changeState(e, 'first')} />
        <input placeholder='Поле ввода 2' type="text" onChange={(e) => changeState(e, 'second')} />
        <input placeholder='Поле ввода 3' type="text" onChange={(e) => changeState(e, 'third')} />
        <button className='App__inputs_btn'>submit</button>
      </form>

      <h1 className='App__text'>вывод 1: <p>{visible ? value.first : null}</p></h1>
      <h1 className='App__text'>вывод 2: <p>{visible ? value.second : null}</p></h1>
      <h1 className='App__text'>вывод 3: <p>{visible ? value.third : null}</p></h1>
    </div>
  );
}

export default App;
