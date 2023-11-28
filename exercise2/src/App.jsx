import { useState } from 'react'

import './App.css'
import ArrayWork from './ArrayWork'
import ItemInput from './ItemInput'
import TermsOfUse from './TermsOfUse'
import EmailInput from './EmailInput'
import ProductList from './ProductList'
import EnterProduct from './EnterProduct'
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'



function App() {

  

  return (
    <>
    <EnterProduct />
    
    <EmailInput />
    <TermsOfUse />
    <h1>Exercise2</h1>
  
    <ItemInput />
    </>


      
  )
}

export default App
