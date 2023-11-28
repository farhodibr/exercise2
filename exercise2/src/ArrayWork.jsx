import { useState } from 'react'

import './App.css'


export default function ArrayWork (props) {
  const [testArray, setTestArray] = useState([])

    function showArray () {
     
    return testArray.map((item, index) => {
      index = index + 1
      return <li key={index}>{index}  {item}</li>
    })
  }

  function addToArray () {
    setTestArray(curTestArray => [...curTestArray, props.newItem])
  }

  return (
    <>
      <h1>Array Work</h1>
      <button className="logo" onClick={addToArray}>Add to Array</button>
      <ul>
        {showArray()}
       
      </ul>
    </>

      
  )
}


