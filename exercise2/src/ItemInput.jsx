import { useState } from 'react'


import ArrayWork from './ArrayWork'


 export default function ItemInput() {

  const [newItem, setNewItem] = useState(0);

  function handleChange(event) {
    setNewItem(event.target.value);
  }
  

  return (
    <div>
    
        <h1>Item Input</h1>
        <input className="logo react" type="text" onChange={handleChange} />
 
      <ArrayWork newItem={newItem} />
    </div>

      
  )
}


