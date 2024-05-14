import { useState, useEffect } from 'react'
import './App.css'
import useInput from './hooks/useInput'

function InputComponent() {
  const [data1, onChange1] = useInput('');
  const [data2, onChange2] = useInput('');

  useEffect(() => {
    console.log(data1)
    console.log(data2)
  },[data1, data2])

  return (
    <div>
      <input value={data1} onChange={onChange1} />
      <input value={data2} onChange={onChange2} />
      <button>전송</button>
    </div>
  )
}

export default InputComponent
